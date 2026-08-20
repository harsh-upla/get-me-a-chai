"use client";
import { fetchAllUsers } from "@/actions/userActions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [users, setusers] = useState([]);

  //fetches user to diaplay all user
  const userFetch = async () => {
    let u = await fetchAllUsers();
    // console.log(u);

    if (u) {
      setusers(u);
      // console.log("users", u);
      toast.success("users fetched");
    }
  };

  useEffect(() => {
    toast.success("You are Welcomed.......");
  }, []);

  useEffect(() => {
    userFetch();
  }, []);

  return (
    <>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9342853720075226"
          crossOrigin="anonymous"></script>
      </head>
      <div className="flex flex-col text-white items-center justify-center w-full h-[60vh] md:h-[40vh] gap-20 md:gap-5 md:px-0 ">
        <div className=" font-bold text-5xl flex gap-0 md:gap-3 h-10 md:h-20 md:pl-0 pl-2 w-fit">
          <span className="pl-10">Buy Me a Chai</span>
          <img
            width={150}
            height={150}
            className="flex size-48 relative bottom-18 right-8 md:bottom-12 md:size-32 justify-center items-center md:mb-7"
            src="./tea.gif"
            alt="tea"
          />
        </div>

        <div className="text-lg w-[90vw] md:w-fit">
          A Crowedfunded platform for creators . Get funded by your fans and
          followers.Your fans can buy you a chai and can save your life. Start
          now !
        </div>

        <div className="btn cursor-pointer gap-8 md:gap-3 flex md:flex-row flex-col w-[60vw] md:w-full justify-center">
          <Link
            className=" text-white flex items-center justify-center font-medium rounded-lg text-xl px-4 py-2.5 leading-5 cursor-pointer bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 bg-size-[200%_100%] bg-left transition-[background-position,box-shadow,transform] duration-500 ease-out hover:bg-right hover:shadow-[0_8px_25px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 focus:ring-2 focus:outline-none focus:ring-purple-900 dark:focus:ring-purple-800 "
            href={"/login"}
          >Start now !
          </Link>
          <Link
            className="relative flex items-center justify-center text-white font-medium px-4 py-2.5 rounded-lg leading-5 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-[200%_100%] bg-left transition-all duration-500 ease-out hover:bg-right focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-xl"
            href={"https://github.com/harsh-upla/get-me-a-chai"}
          >
            <button type="button">Github</button>
          </Link>
        </div>
      </div>

      <div className="h-1 bg-[#ffffff57]"></div>

      <div className="container text-white mx-auto mt-3 flex gap-3 flex-col  ">
        <h1 className="text-center font-bold text-2xl mt-10">
          Your fans can buy you a chai
        </h1>

        <div className="items flex justify-around md:flex-row flex-col  md:gap-0 gap-10 py-26">
          <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./man.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./coin.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./group.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-[#ffffff57]"></div>

      <div className="container text-white mx-auto mt-3 flex gap-3 flex-col  ">
        <h1 className="text-center font-bold text-2xl mt-10">All users !</h1>

        <div className="items flex justify-around md:flex-row flex-col  md:gap-0 gap-10 py-26">
          <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./group.gif"
              alt="man"
            />
            <div className="flex flex-col gap-3 w-[85vw] md:w-[33vw] p-4 bg-linear-to-br from-[#141e302d] to-[#243b5544] border border-white/20 backdrop-blur-xl shadow-2xl rounded-2xl">
              <h1 className="text-center">total user count : {users.length}</h1>
              {users &&
                users.map((item, index) => {
                  return (
                    <div
                      key={item._id || item.email || index}
                      className="md:px-5 md:py-2 flex gap-5 items-center border border-white/20 backdrop-blur-xl rounded-2xl px-2 py-1"
                    >
                      <div className="size-12 md:size-14 mt-1">
                        <img
                          width={50}
                          className="rounded-full object-contain"
                          src={`${item.profilepic}`}
                          alt="PP"
                        />
                      </div>
                      <div className="flex items-center md:text-lg md:font-bold justify-between w-full ">
                        <span>{item.username}</span>
                        <Link
                          className="bg-blue-700 px-4 py-1.5 md:px-6 md:py-1.5 rounded-lg"
                          href={`/${item.username}`}
                        >
                          Support
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./coin.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center bg-[rgba(47,144,182,0.22)] md:py-0 py-7 w-[90vw] mx-auto rounded-xl md:w-[20vw] md:m-0 md:bg-[#fff0]">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./group.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div> */}
        </div>
      </div>

      <div className="h-1 bg-[#ffffff57]"></div>

      <div className="container text-white mx-auto mt-3 flex gap-3 flex-col ">
        <h1 className="text-center font-bold text-2xl mt-10">
          Btw , Thank you codewithharry
        </h1>

        <div className="items flex justify-around py-26">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QtaorVNAwbI?si=niokfJ1IHJUf6tpT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
