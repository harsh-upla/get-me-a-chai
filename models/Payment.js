import mongoose, { model } from "mongoose";

const PaymentSchema = new mongoose.Schema({
  // String is shorthand for {type: String}
  name: { type: String, required: true },
  to_user: String,
  oId: String,
  message: String,
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
