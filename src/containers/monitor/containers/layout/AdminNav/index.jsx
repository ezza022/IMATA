import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNav({ setMobileNav }) {
  return (
    <nav className="flex flex-col mt-10 px-4 text-center ">
      <NavLink
        onClick={() => setMobileNav(false)}
        activeClassName="bg-gray-200"
        exact
        to="/admin/"
        className="cursor-pointer py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:bg-gray-800 rounded"
      >
        Berita
      </NavLink>
      <NavLink
        onClick={() => setMobileNav(false)}
        activeClassName="bg-gray-200"
        to="/admin/kegiatan"
        className="cursor-pointer mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
      >
        Kegiatan
      </NavLink>
      <NavLink
        onClick={() => setMobileNav(false)}
        activeClassName="bg-gray-200"
        to="/admin/pengurus"
        className="cursor-pointer mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
      >
        Pengurus
      </NavLink>
      <NavLink
        onClick={() => setMobileNav(false)}
        activeClassName="bg-gray-200"
        to="/admin/anggota"
        className="cursor-pointer mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
      >
        Data Anggota
      </NavLink>
    </nav>
  );
}
