"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchUserEmail } from "@/actions/userActions";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getData();
  }, [session]);

  const getData = async () => {
    // await connectDB();
    if (session) {
      let u = await fetchUserEmail(session.user.email);
      if (u) {
        setCurrentUser(u);
      } else {
        console.log("User data not found at getdata function");
      }
    } 
  };
  return (
    <nav className="md:h-16 max-w-full">
      <div className="text-white h-full bg-gray-900 pb-3 md:pb-0 flex flex-col md:flex-row  items-center md:justify-between md:px-3">
        <div className="logo font-bold text-xl select-none flex gap-0 justify-center items-center">
          <Link className="flex gap-0 justify-center items-center" href={"/"}>
            <img
              width={50}
              height={50}
              className="flex justify-center items-center mb-3"
              src="./tea.gif"
              alt="tea"
            />
            <span>GetMEaChai!</span>
          </Link>
        </div>
        <div className="opts ">
          <div className="flex md:w-fit w-[30vw] md:flex-row flex-col">
            {session ? (
              <div className="flex justify-center items-center gap-3">
                <div className="cursor-pointer relative">
                  <div className="inline-block relative">
                    <button
                      onClick={() => {
                        setShowdropdown(!showdropdown);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          setShowdropdown(false);
                        }, 500);
                      }}
                      className="cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20"
                    >
                      WELCOME {session.user.email}
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      >
                        <path
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      anchor="bottom end"
                      className={`${showdropdown ? "" : "hidden"} absolute z-10 right-0 mt-2 w-36 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in`}
                    >
                      <div className="py-1">
                        <Link
                          href={"/dashboard"}
                          className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                        >
                          dashboard
                        </Link>
                        <Link
                          href={`/${currentUser?.username}`}
                          className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                        >
                          Your page
                        </Link>
                        <div
                          onClick={() => {
                            signOut();
                          }}
                          className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                        >
                          signout
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center ">
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    type="button"
                    className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-2 focus:outline-none focus:ring-purple-900 dark:focus:ring-purple-800 font-medium rounded-lg text-sm md:w-fit w-[30vw] px-4 py-2.5 text-center leading-5 cursor-pointer "
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-2 focus:outline-none focus:ring-purple-900 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-4 py-2.5 text-center leading-5 cursor-pointer "
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;