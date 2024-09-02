import React from "react";
import { assets } from "../assets/assets";
import { FiGlobe } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex mt-1">
      <div className="bg-[#121212] h-[30%] rounded-xl flex flex-col justify-around">
        <div className="flex items-center gap-2 pl-7 cursor-pointer mt-2">
          <img className="w-6" src={assets.spotify_white} alt="Spotify" />
          <p className="text-base font-bold">Spotify</p>
        </div>
        <div className="flex items-center gap-5 pl-7 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold text-base">Home</p>
        </div>
        <div className="flex items-center gap-5 pl-7 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold text-base">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[63%] rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 pb-5 cursor-pointer hover:text-white transition duration-300">
            <img
              className="w-6 ml-2"
              src={assets.stack_icon}
              alt="Your Library"
            />
            <p className="font-semibold text-base text-gray-400 hover:text-white">
              Your Library
            </p>
            <img
              className="w-4 ml-28 rounded-full transition duration-300 cursor-pointer"
              src={assets.plus_icon}
              alt="Plus"
            />
          </div>
        </div>
        <div className="relative h-[calc(40%-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-4 p-3">
            <div className="bg-[#242424] p-4 rounded-lg">
              <h1 className="text-[16px] font-bold">
                Create your first playlist
              </h1>
              <p className="font-light text-[14px]">
                It's easy, we will help you
              </p>
              <button className="px-4 py-1.5 bg-white text-[13px] text-black rounded-full mt-4 font-extrabold">
                Create Playlist
              </button>
            </div>
            <div className="bg-[#242424] p-4 rounded-lg">
              <h1 className="text-[16px] font-bold">
                Let's find some podcasts to follow
              </h1>
              <p className="font-light text-[14px]">
                We will keep you updated on new episodes
              </p>
              <button className="px-4 py-1.5 bg-white text-[13px] text-black rounded-full mt-4 font-extrabold">
                Browse Podcasts
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 text-white">
          <div className="flex flex-col ml-2 pt-5 gap-1">
            <div className="flex justify-items-start py-1">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-4 cursor-pointer">
                  <p className="text-[11px] text-gray-400">Legal</p>
                  <p className="text-[11px] text-gray-400">
                    Safety & Privacy Center
                  </p>
                  <p className="text-[11px] text-gray-400">Privacy Policy</p>
                </div>
              </div>
            </div>
            <div className="flex justify-items-start py-1">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-3 cursor-pointer">
                  <p className="text-[11px] text-gray-400">Cookies</p>
                  <p className="text-[11px] text-gray-400">About Ads</p>
                  <p className="text-[11px] text-gray-400">Accessibility</p>
                </div>
              </div>
            </div>
            <div className="flex justify-items-start py-1">
              <p className="text-[11px] text-gray-400 cursor-pointer">Cookies</p>
            </div>
            <div className="flex justify-start py-4 text-[14px] font-bold">
              <button className="px-3 py-1 border border-gray-500 rounded-full flex items-center gap-1">
                <FiGlobe size={18} />
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
