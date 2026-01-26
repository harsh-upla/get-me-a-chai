export default function Home() {
  return (
    <>
      <div className="flex flex-col text-white items-center justify-center h-[40vh] gap-5">
        <div className=" font-bold text-5xl flex gap-3 items-center justify-center h-20">
          Buy Me a Chai
          <img
            width={150}
            height={150}
            className="flex justify-center items-center mb-7"
            src="./tea.gif"
            alt="tea"
          />
        </div>

        <div className="text-lg ">
          A Crowedfunded platform for creators . Get funded by your fans and
          followers. Start now !
        </div>

        <div className="btn cursor-pointer gap-3 flex">
          <button
            type="button"
            className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-2 focus:outline-none focus:ring-purple-900 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-4 py-2.5 text-center leading-5 cursor-pointer "
          >
            Start now !
          </button>
          <button
            type="button"
            className="text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300       dark:focus:ring-cyan-800 font-medium rounded-lg text-xl cursor-pointer px-4 py-2.5 text-center leading-5"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="h-1 bg-[#ffffff57]"></div>
      <div className="container text-white mx-auto mt-3 flex gap-3 flex-col  ">
        <h1 className="text-center font-bold text-2xl mt-10">
          {" "}
          Your fans can buy you a chai
        </h1>

        <div className="items flex justify-around py-26">
          <div className="flex flex-col gap-5 items-center justify-center">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./man.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./coin.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <img
              width={88}
              className="bg-gray-400 rounded-full"
              src="./man.gif"
              alt="man"
            />
            <p className="">Fund yourself</p>
            <p>your fans are here to help you</p>
          </div>
        </div>
      </div>
      <div className="h-1 bg-[#ffffff57]"></div>
      <div className="container text-white mx-auto mt-3 flex gap-3 flex-col ">
        <h1 className="text-center font-bold text-2xl mt-10">
          {" "}
          Btw , U can check Out my gameplay
        </h1>

        <div className="items flex justify-around py-26">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wR1wCJSUhAQ?si=jyo0Tc3WU3ywhm4l&amp;start=60"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
