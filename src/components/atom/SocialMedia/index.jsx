import React from "react";

export default function SocialMedia() {
  return (
    <div className="social w-1/2 space-y-10">
      <h1 className="text-4xl font-bold text-center">Sosial Media</h1>
      <ul className="flex flex-row space-x-12 justify-center">
        <li className="rounded-circle bg-blue-800 text-white h-12 w-12 flex ">
          <a className="m-auto" href="a">
            FB
          </a>
        </li>
        <li className="rounded-circle bg-pink-700 text-white h-12 w-12 flex">
          <a className="m-auto" href="a">
            IG
          </a>
        </li>
        <li className="rounded-circle bg-blue-300 text-white h-12 w-12 flex">
          <a className="m-auto" href="a">
            TW
          </a>
        </li>
        <li className="rounded-circle bg-red-800 text-white h-12 w-12 flex">
          <a className="m-auto" href="a">
            YT
          </a>
        </li>
      </ul>
    </div>
  );
}
