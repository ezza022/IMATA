import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader({setMobileNav}) {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-4 lg:space-x-0">
        <button onClick={()=>setMobileNav(true)} className="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-medium text-gray-800 dark:text-white">
            Overview
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-black">{`<- back`}</Link>
        <button className="flex text-gray-600 dark:text-gray-300 focus:outline-none">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 relative focus:outline-none">
            <h2 className="text-gray-700 dark:text-gray-300 text-sm hidden sm:block">
              Admin
            </h2>
            <img
              className="h-9 w-9 rounded-full border-2 border-purple-500 object-cover"
              src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Your avatar"
            />
          </button>
          {/* <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  Tickets
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  Logout
                </a>
              </div> */}
        </div>
      </div>
    </header>
  );
}
