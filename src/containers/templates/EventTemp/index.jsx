import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonPage from "../../../components/atom/ButtonPage";
import CardDetail from "../../../components/atom/CardDetail";
import Title from "../../../components/atom/Title";

export default function EventTemp({ getData }) {
  const data = useSelector((state) => state.kegiatan);
  useEffect(() => {
    getData("kegiatan");
  }, [getData]);
  return (
    <div className="events container space-y-3 p-8 ">
      <Title title="Kegiatan" />
      <div className="card-wrapper space-y-3 p-5">
        {data !== []
          ? data.map((singleData, index) => (
              <CardDetail key={index} path="kegiatan" data={singleData} />
            ))
          : null}
      </div>
      <div className="btn text-center">
        <ButtonPage path="kegiatan" />
      </div>
    </div>
  );
}
