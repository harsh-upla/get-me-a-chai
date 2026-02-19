import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
  // String is shorthand for {type: String}
  email: { type: String, required: true,unique: true },
  username: { type: String, required: true },
  name: String,
  profilepic: String,
  coverpic: String,
  razorpayid: String,
  razorpaysecret: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
