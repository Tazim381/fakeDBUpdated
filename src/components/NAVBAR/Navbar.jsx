
import React from "react";

const Navbar = ({ isSidebar ,setIsSidebar}) => {
  const handleOnClick = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div
      className=" fixed flex items-center justify-between top-0
    px-3 py-3 bg-gray-100 shadow-md backdrop-blur-md w-full z-50 "
    >
      <div className="flex gap-3 items-center">
        <div className="text-2xl cursor-pointer" onClick={handleOnClick}>
          &#9776;
        </div>
        <h1 className=" text-3xl font-semibold ">MOCKDB</h1>
      </div>
      <div className="flex items-center gap-2 ">
        <div className=" font-semibold">Tutorial</div>
        <div className=" font-semibold">SignIn</div>
      </div>
    </div>
  );
};

export default Navbar;
