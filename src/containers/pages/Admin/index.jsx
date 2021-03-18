import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminHeader from "../../monitor/containers/layout/AdminHeader";
import AdminMain from "../../monitor/containers/layout/AdminMain";
import AdminNav from "../../monitor/containers/layout/AdminNav";

export default function Admin() {
  const login = useSelector((state) => state.login);
  const [mobileNav, setMobileNav] = useState(false)
  return login ? (
    <div className="display-none lg:flex font-sans h-screen bg-gray-200 dark:bg-gray-800 font-roboto">
      <div className= {mobileNav?"fixed z-20 inset-0 bg-black opacity-50 transition-opacity":"lg:hidden"} />
      <div className={mobileNav?"fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto ":"hidden lg:block fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"}>
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <span className="text-gray-800 dark:text-white text-2xl font-semibold">
              Dashboard
            </span>
          </div>
        </div>
        <AdminNav setMobileNav={setMobileNav}/>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader setMobileNav={setMobileNav} />
        <AdminMain />
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <div>
        <p className="text-red-600 text-2xl font-extrabold mb-3">
          Login Terlebih Dahulu !
        </p>
        <Link
          to="/login"
          className="text-lg py-2 px-5 rounded-md bg-blue-500 text-white"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
