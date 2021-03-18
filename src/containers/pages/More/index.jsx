import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardXl from "../../../components/atom/CardXl";
import Title from "../../../components/atom/Title";
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import Pagination from "../../../components/molecules/Pagination";

export default function More({ path,getData }) {
  const data = useSelector((state) => state.data);
  useEffect(() => {
    getData(path);
  }, [getData,path]);
  return (
    <>
      <Navbar />
      <div className="container my-24 space-y-10">
        <Title title={path} />
        <div className="event-card space-y-5 flex flex-wrap">
          {data !== []
            ? data.map((singelData, index) => (
                <CardXl
                  key={index}
                  path={path}
                  id={singelData.id}
                  data={singelData.data}
                />
              ))
            : null}
        </div>
        <div className="pagination mt-32">
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
}
