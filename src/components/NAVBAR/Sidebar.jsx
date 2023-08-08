import React from "react";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x:0 },
  closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
};

const Sidebar = ({ isSidebar }) => {
  return (
    <motion.div
      animate={isSidebar ? "open" : "closed"}
      variants={variants}
      className={`h-screen w-44 shadow-md backdrop-blur-md bg-gray-50 fixed 
      }`}
    >
      <div className="flex flex-col gap-4 mt-20 ml-3">
        <div className="flex items-center gap-2">
          <AiFillSetting className=" text-2xl text-gray-600" />{" "}
          <p className="font-semibold text-gray-600">Setting</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineUser className=" text-2xl text-gray-600" />{" "}
          <p className="font-semibold text-gray-600">Account</p>
        </div>
        <div className="flex items-center gap-2">
          <IoMdExit className=" text-2xl text-gray-600" />{" "}
          <p className="font-semibold text-gray-600">Exit</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
