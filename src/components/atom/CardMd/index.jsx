import React from "react";
import ButtonCard from "../ButtonCard";

export default function CardMd({ path, data }) {
  return (
    <div className="card rounded-md bg-white w-72 mx-auto mb-10 overflow-hidden font-sans">
      <div className="img">
        <img src={data.data.img} className="w-full h-52" alt="a" />
      </div>
      <div className="content space-y-4 px-4 pt-2 pb-4">
        <div className="head">
          <div className="title font-bold text-2xl">{data.data.judul}</div>
          <div className="author">{data.data.penulis}</div>
          <div className="date">{data.data.posted}</div>
        </div>
        <div className="body text-center space-y-4">
          <p className="text-left">{data.data.isi}</p>
          <ButtonCard path={`${path}/${data.id}`} />
        </div>
      </div>
    </div>
  );
}
