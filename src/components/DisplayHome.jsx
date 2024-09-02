import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="mb-6">
          <h1 className="my-5 font-bold text-2xl flex justify-between">
            Featured Charts
            <a href="#" className="text-lg text-gray-400 hover:underline">
              Show All
            </a>
          </h1>
          <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h1 className="my-5 font-bold text-2xl flex justify-between">
            Today's Biggest Hits
            <a href="#" className="text-lg text-gray-400 hover:underline">
              Show All
            </a>
          </h1>
          <div className="flex overflow-auto">
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;