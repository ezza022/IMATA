import React from "react";
import ButtonCard from "../ButtonCard";

export default function CardXl({ path, id, data }) {
  return (
    <div className="event w-11/12 mx-auto  sm:flex overflow-hidden shadow-md rounded-md">
      <div className="event-img sm:w-1/3 mb-2 sm:mb-0">
        <img className="" src={data.img} alt="w" width="100%" height="100%" />
      </div>

      <div className="p-5 content flex-1 flex flex-wrap content-between space-y-6 sm:space-y-0 ">
        <div className="w-full space-y-3">
          <p className="font-bold text-2xl">{data.judul}</p>
          <p>{data.isi}</p>
        </div>

        <div className="btn">
          <ButtonCard path={path} id={id} />
        </div>
      </div>
    </div>
  );
}
