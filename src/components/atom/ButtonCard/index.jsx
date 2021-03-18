import React from "react";
import { Link } from "react-router-dom";

export default function ButtonCard({ path, id }) {
  return (
    <button className=" text-white px-5 py-1 bg-yellow-500 hover:bg-yellow-600 rounded shadow-md">
      <Link to={`${path}/${id}`}>Selengkapnya</Link>
    </button>
  );
}
