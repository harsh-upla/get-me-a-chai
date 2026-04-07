import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/db/connectDB";
import { Skeleton } from 'boneyard-js/react'

export default async function username({ params }) {
  const { username } = await params;

  const checkUser = async () => {
    await connectDB();
    let u = await User.findOne({ username: username.replace("%20", " ") });
    if (!u) {
      return notFound();
    }
  };
  await checkUser();

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}

export const generateMetadata = async ({ params }) => {
  const { username } = await params;
  return {
    title: `Support - ${username} to GET A CHAI`,
  };
};
