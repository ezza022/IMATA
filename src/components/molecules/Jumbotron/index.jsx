import React from "react";
import './index.css'

export default function Jumbotron() {
  return (
    <div className="bg-hero-pattern bg-cover h-600 ">
      <div className="transparent-black h-full w-ful flex flex-col justify-center items-center">
        <img
          className="mx-auto mb-12 opacity-100"
          width="150px"
          src="./hero-img.png"
          alt=""
        />
        <h1 className="text-shadow-white font-bold font-artifika shadow-sm text-xl sm:text-3xl lg:text-5xl text-white">
          IKATAN MAHASISWA TAMIANG
        </h1>
        <h1 className="text-shadow-white font-bold font-artifika shadow-sm text-xl sm:text-3xl lg:text-5xl text-white">
          Lhokseumawe, Aceh Utara
        </h1>
        <p className="text-lg sm:text-xl text-white mt-5 mb-3">Official Website IMATA</p>
        <hr className="border-solid border-2 w-2/12 border-white" />
      </div>
    </div>
  );
}
