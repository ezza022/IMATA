import React, { useEffect } from "react";
import Slider from "react-slick";
import { settings } from "../../../config/slick";
import Title from "../../../components/atom/Title";
import CardMd from "../../../components/atom/CardMd";
import ButtonPage from "../../../components/atom/ButtonPage";
import { useSelector } from "react-redux";

export default function NewsTemp({ getData }) {
  const data = useSelector((state) => state.berita);
  useEffect(() => {
    getData("berita");
  }, [getData]);
  return (
    <div className="news bg-gray-100">
      <div className="news-wrap container p-8 mt-20">
        <Title title="Berita" />
        <div className="card-wrapper mx-10 md:mx-0 xl:mx-28 my-10">
          <Slider {...settings}>
            {data !== []
              ? data.map((singleData, index) => (
                  <CardMd key={index} path="berita" data={singleData} />
                ))
              : null}
          </Slider>
        </div>
        <div className="btn text-center">
          <ButtonPage path="berita" />
        </div>
      </div>
    </div>
  );
}
