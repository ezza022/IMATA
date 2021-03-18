import React from "react";
import { Link } from "react-router-dom";

export default function CardDetail({ path, data }) {
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto bg-white ring-1 ring-gray-100 sm:flex rounded-md overflow-hidden shadow-md">
      <div className="header sm:w-1/3">
        <img className="h-full w-full" src={data.data.img} alt="" />
      </div>
      <div className="body space-y-3 flex flex-col p-2">
        <div className="title">
          <Link to={`${path}/${data.id}`}>
            <h1 className="font-bold text-xl text-yellow-600">
              {data.data.judul}
            </h1>
          </Link>
        </div>
        <div className="time space-y-1">
          <p className="space-x-1 flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="leading-none">
              {data.data.waktu ? data.data.waktu.pukul : null}
            </span>
          </p>
          <p className="space-x-1 flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {/* <span className="leading-none">{`${data.data.waktu.tanggal} ${data.data.waktu.bulan} ${data.data.waktu.tahun}`}</span> */}
          </p>
          <p className="space-x-1 flex items-center">
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="leading-none">{data.data.lokasi}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
