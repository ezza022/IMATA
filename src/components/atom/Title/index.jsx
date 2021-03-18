import React from "react";

export default function Title({title}) {
  return (
    <div className="title text-center text-3xl space-y-4">
      <h1>
        <span className="font-bold">{title}</span>
      </h1>
      <hr className="mx-auto border-2 border-yellow-500 border-solid w-64" />
    </div>
  );
}
