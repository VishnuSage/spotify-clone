import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Links */}
        <div className="grid grid-cols-5 gap-4 mb-8 relative">
          <div>
            <ul>
              <li className="mb-2 text-base font-extrabold">Company</li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">About</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Jobs</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">For the Record</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2 text-base font-extrabold">Communities</li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">For Artists</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Developers</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Advertising</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Investors</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Vendors</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2 text-base font-extrabold">Useful Links</li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Support</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Free Mobile App</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2 text-base font-extrabold">Spotify Plans</li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Premium Individual</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Premium Duo</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Premium Family</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Premium Student</a></li>
              <li className="mb-2"><a href="#" className="text-base font-medium text-gray-400 hover:text-white transition">Spotify Free</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center absolute top-0 right-2">
            {/* Social Media Icons */}
            <a href="#" aria-label="Instagram" className="mr-4 p-3 bg-[#252525] rounded-full hover:bg-[#333333] transition">
              <FaInstagram className="text-lg text-white" />
            </a>
            <a href="#" aria-label="Twitter" className="mr-4 p-3 bg-[#252525] rounded-full hover:bg-[#333333] transition">
              <FaTwitter className="text-lg text-white" />
            </a>
            <a href="#" aria-label="Facebook" className="p-3 bg-[#252525] rounded-full hover:bg-[#333333] transition">
              <FaFacebook className="text-lg text-white" />
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-800 mb-4" />

        {/* Copyright */}
        <div className="text-left mt-10">
          <p className="text-sm text-gray-400">&copy; 2024 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;