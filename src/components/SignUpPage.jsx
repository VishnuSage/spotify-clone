import React from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { assets } from "../assets/assets";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-white">
      <div className="flex flex-col items-center justify-center max-w-lg w-full">
        <img
          className="w-10 py-8"
          src={assets.spotify_white}
          alt="Spotify Logo"
        />
        <h1 className="text-5xl font-bold mb-8 text-center">
          Sign up to
          <br />
          start listening
        </h1>

        <form className="flex flex-col items-center justify-center w-full">
          <div className="mb-2">
            <h2 className="text-sm font-bold mb-2">Email address</h2>
            <input
              type="text"
              placeholder="name@domain.com"
              className="w-80 p-3 bg-transparent rounded-md border border-gray-500 text-base text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>
          <p className="text-sm font-base mb-7 text-[#12ca53] underline cursor-pointer mr-36">
            Use phone number instead
          </p>
          <button className="text-base w-80 bg-[#1DB954] text-black font-bold py-3 px-4 rounded-full text-center">
            Next
          </button>
        </form>

        <hr className="w-80 border-gray-600 my-12" />

        <div className="button-section mb-6 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3">
            <button className="w-80 py-4 px-24 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-base font-bold whitespace-nowrap relative text-center">
              <img
                className="w-5 absolute left-7"
                src={assets.google}
                alt="Google Icon"
              />
              <span className="ml-7">Sign up with Google</span>
            </button>
            <button className="w-80 py-3 px-24 rounded-full flex justify-center items-center gap-2 border border-gray-500 hover:border-white text-base font-bold whitespace-nowrap relative text-center">
              <FaApple size={26} className="absolute left-7" />
              <span className="ml-7">Sign up with Apple</span>
            </button>
          </div>
        </div>

        <hr className="w-80 border-gray-600 my-6" />

        <p className="mt-4 mb-4 text-center text-gray-500 text-base font-bold">
          Already have an account?{" "}
          <a
            href="#"
            className="text-white underline cursor-pointer text-base text-center"
          >
            Log in here
          </a>
        </p>

        <p className="mt-4 mb-7 text-center text-xs text-gray-400">
          This site is protected by reCAPTCHA and the Google<br></br>
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
