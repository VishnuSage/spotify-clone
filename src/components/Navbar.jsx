import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-3 left-[24.8%] z-50 w-[74.5%] p-2 flex justify-between items-center font-semibold bg-[#121212] rounded-t-xl lg:ml-0">
      <div className="flex items-center gap-2">
        <img
          className="w-10 bg-[#0a0c0c] p-2 ml-3 rounded-full cursor-pointer hover:brightness-150"
          src={assets.arrow_left}
          alt="Left arrow"
        />
        <img
          className="w-10 bg-[#0a0c0c] p-2 rounded-full cursor-pointer hover:brightness-150"
          src={assets.arrow_right}
          alt="Right arrow"
        />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/signup">
          <p className="py-1 px-3 rounded-2xl text-[19px] cursor-pointer font-extrabold text-gray-400 transition hover:scale-105 hover:text-white">
            Sign up
          </p>
        </Link>

        <Link to="/login">
          <p className="bg-white text-black text-[19px] px-10 py-4 mr-3 rounded-full font-extrabold hidden md:block cursor-pointer transition hover:scale-105 hover:bg-gray-200 hover:text-gray-900">
            Log in
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
