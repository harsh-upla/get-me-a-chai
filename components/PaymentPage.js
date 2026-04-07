"use client";
import { useState } from "react";
import Script from "next/script";
// import { useSession } from 'next-auth/react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUser, fetchPayments, initiate } from "@/actions/userActions";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { LuRefreshCcw } from "react-icons/lu";
import { Skeleton } from 'boneyard-js/react'

export default function PaymentPage({ username }) {
  let c = username.replace("%20", " ");
  // const { data: session } = useSession()
  const router = useRouter();
  // const [refresh, setRefresh] = useState(false)
  const [paymentform, setPaymentform] = useState({});
  const [error, seterror] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setpayments] = useState([]);
  const searchParams = useSearchParams();
  const paymentdone = searchParams.get("paymentdone");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (paymentdone == "false" || paymentdone == "true") {
      // This is the right for production use
      // if (paymentdone === 'true') {
      toast("✅ Payment done... ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
    router.push(`/${username}`);
  }, [paymentdone]);

  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    // await connectDB();
    let u = await fetchUser(c);
    if (u) {
      setCurrentUser(u);
    } else {
      alert("User data not found at getdata function");
    }
    let dbpayments = await fetchPayments(c);
    if (dbpayments) {
      setpayments(dbpayments);
      // alert("Welcome to your page")
    } else {
      toast("⚠️Payment data not fetched !!!⚠️", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  const pay = async (amount) => {
    if (paymentform.name?.length < 3) {
      seterror("please enter valid name");
    } else if (paymentform?.message.length < 3) {
      seterror("please enter enough message");
    } else if (paymentform?.amount < 2) {
      seterror("please enter minimum amount");
    } else {
      seterror("");
    }

    let a = await initiate(amount, c, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay/`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        // "name": "Harsh Upla", //your customer's name
        // "email": "gaurav.kumar@example.com",
        // "contact": "+919876543210" //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    // error solution for razorpay upi payment option not showing

    var rzp1 = new Razorpay(options);
    rzp1.open();
    setPaymentform({});
  };

  return (
     <Skeleton name="blog-card" loading={false}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Zoom}
      />

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div id="cover-image" className="w-full relative ">
        <img
          className="w-full object-cover h-[50vh]"
          src={currentUser?.coverpic}
          alt="cover-image"
        />

        <div
          id="profile-image"
          className="absolute -bottom-24 p-2 w-full flex justify-center items-center "
        >
          <div className="border-5 border-[#00091d] rounded-full mx-auto flex justify-center items-center">
            <img
              className="size-42 rounded-full"
              src={currentUser?.profilepic}
              alt="profile-image"
            />
          </div>
        </div>
      </div>
      <div id="profile-info" className="flex ">
        <div className="info flex flex-col justify-center items-center gap-1 mx-auto mt-24">
          <span className="font-bold">@{c}</span>
          <span className="text-slate-400">
            Help <span className="font-bold">{c}</span> grow by buying them a
            chai!
          </span>
          <span className="text-slate-400">
            {payments.length} Supporters , {c} raised
            <span className="font-bold">
              ₹{payments.reduce((total, item) => total + item.amount, 0) / 100}
            </span>
            so far!
          </span>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10 flex md:flex-row flex-col gap-3 ">
        <div className="leaserboard bg-slate-900 w-full md:w-1/2 rounded-lg p-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-bold text-2xl mb-5">Supporters</h2>
            <button
              type="button"
              onClick={() => getData()}
              className="cursor-pointer text-white rounded-full h-10 w-fit bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-6"
            >
              <LuRefreshCcw />
            </button>
          </div>
          <div className="flex gap-2 items-center text-white bg-[#f118188f] rounded-xl px-4  py-2 text-sm md:text-xl my-5 ">
              ***The payment gateway credentias nbot configured yet so no real money included . So even failed payments
              will show here !!! ***
            </div>
          <ul className="overflow-y-auto max-h-72 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#fff0] [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-[#fff0] dark:[&::-webkit-scrollbar-thumb]:bg-[#4747474f]">
            
            {payments.length === 0 && (
              <span className="text-slate-400">
                No supporters yet. Be the first one to support!
              </span>
            )}
            {payments.map((item) => {
              return (
                <li key={item._id} className="flex gap-2 items-center ">
                  <img width={33} src="avatar.gif" alt="avatar" />
                  {item.name} donated
                  <span className="font-bold"> {`₹${item.amount / 100}`} </span>
                  with a message {`"${item.message}"`}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="payment bg-slate-900 w-full md:w-1/2 rounded-lg p-5 flex flex-col gap-3">
          <h2 className="font-bold text-2xl mb-5">Make a payment</h2>
          <input
            onChange={handleChange}
            value={paymentform.name || ""}
            name="name"
            className="text-white p-3 w-full bg-slate-800 "
            placeholder="Enter name"
            type="text"
          />
          <input
            onChange={handleChange}
            value={paymentform.message || ""}
            name="message"
            className="text-white p-3 w-full bg-slate-800 "
            placeholder="Enter meassage"
            type="text"
          />
          <input
            onChange={handleChange}
            value={paymentform.amount || ""}
            name="amount"
            className="text-white p-3 w-full bg-slate-800  "
            placeholder='Enter Amount In "₹" '
            type="number"
          />
          or choose from this :
          <div className="w-full flex gap-3">
            <button
              onClick={() => {
                pay(3000);
              }}
              className="bg-slate-800 py-2 px-3 rounded-lg cursor-pointer border border-[#fff0] hover:border transition hover:border-slate-600"
            >
              Pay <span>₹30</span>
            </button>
            <button
              onClick={() => {
                pay(5000);
              }}
              className="bg-slate-800 py-2 px-3 rounded-lg cursor-pointer border border-[#fff0] hover:border transition hover:border-slate-600"
            >
              Pay <span>₹50</span>
            </button>
            <button
              onClick={() => {
                pay(10000);
              }}
              className="bg-slate-800 py-2 px-3 rounded-lg cursor-pointer border border-[#fff0] hover:border transition hover:border-slate-600"
            >
              Pay <span>₹100</span>
            </button>
          </div>
          <button
            disabled={error.length > 1 || !paymentform.name}
            onClick={() => {
              pay(paymentform.amount * 100);
            }}
            type="button"
            className="text-white bg-linear-to-r from-purple-900 to-pink-900 hover:bg-linear-to-l focus:ring-2 focus:outline-none focus:ring-purple-900 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-4 py-2.5 text-center leading-5 cursor-pointer w-full disabled:bg-gray-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed "
          >
            Pay
          </button>
          <span className="text-red-500">{error}</span>
        </div>
      </div>
    </Skeleton>
  );
}
