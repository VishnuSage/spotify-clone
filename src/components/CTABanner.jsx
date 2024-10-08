import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <div className="w-[calc(100%-20px)] h-20 px-4 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white flex items-center justify-between fixed bottom-1 left-1/2 transform -translate-x-1/2 shadow-lg cursor-pointer">
      <div className="flex flex-col justify-center">
        <h2 className="text-[13px] font-bold tracking-wide mb-1">
          Preview of Spotify
        </h2>
        <h3 className="text-[14px] font-normal">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </h3>
      </div>
      <div className="flex items-center">
        <Link to="/signup">
          <button className="px-7 py-3 bg-white text-black text-[15px] font-extrabold rounded-full transition hover:scale-105">
            Sign up free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTABanner;
