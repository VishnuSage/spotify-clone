import React from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { assets } from "../assets/assets";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-white">
      <div className="flex flex-col items-center justify-center max-w-lg w-full p-10">
        <img
          className="w-14 py-10"
          src={assets.spotify_white}
          alt="Spotify Logo"
        />
        <h1 className="text-6xl font-bold mb-8 text-center">
          Sign up to
          <br />
          start listening
        </h1>

        <form className="w-full">
          <div className="mb-2">
            <h2 className="text-lg font-bold mb-2">Email address</h2>
            <input
              type="text"
              placeholder="name@domain.com"
              className="w-full p-4 bg-transparent rounded-md border border-gray-500 text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>
          <p className="text-lg font-base mb-7 text-[#12ca53] underline cursor-pointer">Use phone number instead</p>
          <button className="text-xl w-full bg-[#1DB954] text-black font-bold py-4 px-4 rounded-full">
            Next
          </button>
        </form>

        <hr className="w-full border-gray-600 my-12" />

        <div className="button-section mb-6">
            <div className="flex flex-col gap-3">
              <button className="w-full py-4 px-24 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <img
                  className="w-6 absolute left-10"
                  src={assets.google}
                  alt="Google Icon"
                />
                <span className="ml-7">Sign up with Google</span>
              </button>
              <button className="w-full py-3 px-24 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-xl font-bold whitespace-nowrap relative">
                <FaApple size={30} className="absolute left-10" />
                <span className="ml-7">Sign up with Apple</span>
              </button>
            </div>
          </div>

          <hr className="w-full border-gray-600 my-6" />

          <p className="mt-4 mb-4 text-center text-gray-500 text-xl font-bold">
            Already have an account?{" "}
            <a href="#" className="text-white underline cursor-pointer text-xl">
              Log in here
            </a>
          </p>

        <p className="mt-4 text-center text-base text-gray-400">
        This site is protected by reCAPTCHA and the Google<br></br>
        <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;