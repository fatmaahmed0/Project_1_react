import React from "react";
import photo1 from "../../assets/images/poert1.png";
import photo2 from "../../assets/images/port2.png";
import photo3 from "../../assets/images/port3.png";
import { useState } from "react";
export default function Portfolio() {
  const photos = [photo1, photo2, photo3, photo1, photo2, photo3];
  const [selectPhoto, setselectPhoto] = useState(null);
  
  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="uppercase text-3xl lg:text-4xl text-blue-950 font-bold">
        portfolio component
      </h1>
      <div className="flex  items-center justify-center mt-5">
        <div className="bg-blue-950 h-1 w-24"></div>
        <i className="fa-solid fa-meteor text-blue-950 text-xl  pl-6 pr-10"></i>
        <div className="bg-blue-950 h-1 w-24"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 w-[85%] m-auto">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img src={photo} alt="" className="rounded-xl w-full" />

            <button
              type="button"
              onClick={() => setselectPhoto(photo)}
              className="absolute top-0 left-0 right-0 bottom-0"
            >
              <div className="hidden group-hover:flex justify-center items-center absolute inset-0 bg-emerald-500 rounded-xl opacity-80">
                <div className="text-6xl text-white">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* <!-- Main modal --> */}
      {
        selectPhoto && (
        <div
          onClick={() => setselectPhoto(null)}
          className=" fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50 p-4"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <img src={selectPhoto} alt="" className="rounded-xl" />
          </div>
        </div>
        )
      }
    </div>
  );
}
