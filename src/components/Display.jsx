import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import Footer from "./Footer";
import LoginPage from "./LoginPage";

const Display = () => {
  return (
    <div className="relative w-[100%] mt-3 mb-8 mr-3 px-6 pt-4 rounded-xl bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#232b2b] to-[#121212] z-0"></div>

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album" element={<DisplayAlbum />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default Display;
