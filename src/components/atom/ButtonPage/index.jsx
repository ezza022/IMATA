import React from "react";
import { Link } from "react-router-dom";

export default function ButtonPage({path}) {
  return (
    <Link to={path} className="py-1 px-5 bg-yellow-500 text-white rounded-md">
      Baca selengkapnya
    </Link>
  );
}
