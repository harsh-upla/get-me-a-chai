"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";
import connectDB from "@/db/connectDB";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  let user = await User.findOne({ username: to_username });

  if (!user) {
    throw new Error("User not found");
  }

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysecret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  await Payment.create({
    oId: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchUser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  if (!u) {
    // Handle the case where no user is found.
    // You might want to return null, an empty object, or throw a specific error.
    // console.log(`User with username '${username}' not found.`);
    return null;
  }
  let user = u.toObject({ flattenObjectIds: true });
  return user;

  // await connectDB();
  // const user = await User.findOne({ username : username}).lean();
  // if (!user) {
  //    console.log("User not found from useraction");
  //    return NextResponse.json({ error: "User not found from useraction" }, { status: 404 });
  // };

  // return {
  //     ...user,
  //     _id: user?._id.toString(),
  //     createdAt: user?.createdAt?.toISOString(),
  //     updatedAt: user?.updatedAt?.toISOString(),
  // };
};

export const fetchUserEmail = async (email) => {
  await connectDB();
  let u = await User.findOne({ email: email });
  if (!u) {
    // Handle the case where no user is found.
    // You might want to return null, an empty object, or throw a specific error.
    console.log(`User with email '${email}' not found.`);
    return null;
  }
  let user = u.toObject({ flattenObjectIds: true });
  return user;

  // await connectDB();
  // const user = await User.findOne({ username : username}).lean();
  // if (!user) {
  //    console.log("User not found from useraction");
  //    return NextResponse.json({ error: "User not found from useraction" }, { status: 404 });
  // };

  // return {
  //     ...user,
  //     _id: user?._id.toString(),
  //     createdAt: user?.createdAt?.toISOString(),
  //     updatedAt: user?.updatedAt?.toISOString(),
  // };
};

const processMyData = async (data) => {
  // 1. Convert Mongoose document to a plain object
  //    .toObject() keeps getters/virtuals, .lean() is faster and returns POJO directly
  const plainObject = data.toObject ? data.toObject() : data; // Use .toObject() if available

  // 2. Map over the object to ensure all values are serializable
  //    Specifically handle Date objects, ObjectId objects, etc.
  const serializedObject = JSON.parse(JSON.stringify(plainObject));

  // If you need specific transformations, do them here.
  // For example, converting _id to a string if it's an ObjectId object
  if (
    serializedObject._id &&
    typeof serializedObject._id === "object" &&
    serializedObject._id.toString
  ) {
    serializedObject._id = serializedObject._id.toString();
  }

  // Convert Date objects to ISO strings
  if (serializedObject.createdAt instanceof Date) {
    serializedObject.createdAt = serializedObject.createdAt.toISOString();
  }
  if (serializedObject.updatedAt instanceof Date) {
    serializedObject.updatedAt = serializedObject.updatedAt.toISOString();
  }
  if (serializedObject.date instanceof Date) {
    // Assuming 'date' is also a Date object
    serializedObject.date = serializedObject.date.toISOString();
  }

  return serializedObject;
};

export const fetchPayments = async (username) => {
  await connectDB();
  // this is for only development and test purposes

  let p = await Payment.find({ to_user: username })
    .limit(5)
    .sort({ amount: -1 });
  let payments = processMyData(p);
  // THis is right code for production use
  // let p = await Payment.find({ to_user: username,done: true }).lean();
  return payments;
};

export const updateProfile = async (data, oldUsername) => {
  await connectDB();
  let ndata = Object.fromEntries(data);
  if (oldUsername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
    // Update all payments with the old username to the new username
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: ndata.username },
    );
  }
  await User.updateOne({ email: ndata.email }, ndata);
};

export const fetchAllUsers = async () => {
  await connectDB();
  let f = await User.find({});

  let x = await processMyData(f)

  return x;
};