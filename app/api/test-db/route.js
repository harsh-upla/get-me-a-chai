import mongoose from "mongoose";
import connectDB from "@/db/connectDB";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      success: true,
      readyState: mongoose.connection.readyState, // must be 1
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
