import React from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { assets } from "../assets/assets";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-b from-[#282c2c] to-[#121212] text-white overflow-y-scroll">
      <div className="w-full max-w-4xl mx-12 pt-0 pb-12 bg-gradient-to-b from-[#121212] to-[#282c2c]  rounded-lg shadow-lg mt-12 mb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-md mx-auto px-6 pt-5">
          <img
            className="w-12 mx-auto py-3"
            src={assets.spotify_white}
            alt="Spotify Logo"
          />
          <h1 className="text-4xl font-bold mb-9 text-center">
            Log in to Spotify
          </h1>

          <div className="button-section mb-6">
            <div className="flex flex-col gap-3">
              <button className="w-full py-4 px-20 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <img
                  className="w-6 absolute left-8"
                  src={assets.google}
                  alt="Google Icon"
                />
                <span className="ml-5">Continue with Google</span>
              </button>
              <button className="w-full py-3 px-20 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <img
                  className="w-6 absolute left-8"
                  src={assets.facebook}
                  alt="Facebook Icon"
                />
                <span className="ml-5">Continue with Facebook</span>
              </button>
              <button className="w-full py-3 px-20 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <FaApple size={30} className="absolute left-8" />
                <span className="ml-5">Continue with Apple</span>
              </button>
              <button className="w-full py-3 px-20 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <span>Continue with phone number</span>
              </button>
            </div>
          </div>

          <div className="relative mb-6 px-4 pt-4 pb-4">
            <hr
              className="border-t-2 border-gray-800 w-full mx-auto"
              style={{ width: "180%", position: "relative", left: "-40%" }}
            />
          </div>

          <div className="form-section">
            <form>
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Email or username</h2>
                <input
                  type="text"
                  placeholder="Email or username"
                  className="w-full p-5 bg-transparent rounded-lg border border-gray-500 text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                />
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">Password</h2>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-5 bg-transparent rounded-lg border border-gray-500 text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                />
              </div>
              <button className="w-full mb-4 bg-[#1DB954] text-black py-4 px-4 rounded-full hover:bg-[#1ed760] text-xl font-bold">
                Log in
              </button>
            </form>
          </div>

          <p className="mt-4 mb-8 text-center text-white text-xl">
            <a href="#" className="hover:underline">
              Forgot your password?
            </a>
          </p>

          <p className="mt-4 mb-4 text-center text-gray-500 text-xl">
            Don't have an account?{" "}
            <a href="#" className="text-white hover:underline text-xl">
              Sign up for Spotify
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
