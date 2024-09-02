import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-3 text-white hidden lg:flex mt-1">
      <div className="bg-[#121212] h-[30%] rounded-xl flex flex-col justify-around">
        <div className="flex items-center gap-2 pl-8 cursor-pointer mt-2">
          <img className="w-8" src={assets.spotify_white} alt="" />
          <p className="text-xl font-bold">Spotify</p>
        </div>
        <div className="flex items-center gap-5 pl-8 cursor-pointer">
          <img className="w-8" src={assets.home_icon} alt="" />
          <p className="font-bold text-lg">Home</p>
        </div>
        <div className="flex items-center gap-5 pl-8 cursor-pointer">
          <img className="w-8" src={assets.search_icon} alt="" />
          <p className="font-bold text-lg">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[64%] rounded-2xl">
        <div className="p-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4 ml-4 mt-1 cursor-pointer hover:text-white transition duration-300"
          >
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold text-lg text-gray-400 hover:text-white transition duration-300">Your Library</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-5 mr-4 rounded-full transition duration-300 cursor-pointer"
              src={assets.plus_icon}
              alt=""
            />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-2xl font-bold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="ml-2 text-lg">Create your first playlist</h1>
          <p className="font-light ml-2">It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 font-extrabold ml-2">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-2xl font-bold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="ml-2 text-lg">Let's find some podcast to follow</h1>
          <p className="font-light ml-2">We will keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 font-extrabold ml-2">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;