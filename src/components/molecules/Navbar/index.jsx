import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="mb-14"></div>
      <nav className="bg-dark-md w-full fixed top-0 z-10">
        <div className="container flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-1 px-6  shadow sm:items-baseline">
          <div
            className="
        mb-2
        flex
        items-center"
          >
            <div className="h-10 w-10 self-center mr-2">
              <img src="./hero-img.png" alt="" />
            </div>
            <div>
              <Link
                to="/"
                href="/home"
                className=" text-white text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold"
              >
                IMATA <span className="text-xs font-normal">beta</span>
              </Link>
            </div>
          </div>
          <div className="sm:mb-0 self-center">
            <Link
              to="/login"
              className=" text-gray-400 hover:text-green-50 text-md no-underline  hover:text-blue-dark ml-2 px-1"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
