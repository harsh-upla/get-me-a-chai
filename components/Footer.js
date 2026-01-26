import React from "react";

const Footeer = () => {
  const year = Date.year
  return (
    <footer className="h-12">
      <div className="h-full flex justify-center items-center bg-gray-900 text-white">
        <p className="">Copyright &copy; Get me a Chai - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footeer;
