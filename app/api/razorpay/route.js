import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { NextResponse } from "next/server";
import User from "@/models/User";

export const POST = async (req, res) => {
  await connectDB();
  let body = await req.formData();
  body = Object.fromEntries(body);

  let p = await Payment.findOne({ oId: body.razorpay_order_id });

  if (!p) {
    return NextResponse.json({
      success: false,
      message: "Payment order ID not found",
    });
  }

  let user = await User.findOne({ username: p.to_user });

  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    user?.razorpaysecret,
  );

  if (xx) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { oId: body.razorpay_order_id },
      { done: true },
      { new: true },
    );
    NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`,
    );
  } else {
    // This is right code but commented to allow redirection even if verification fails
    return NextResponse.json({
      success: false,
      message: "Payment verification failed",
    });
  }
};
