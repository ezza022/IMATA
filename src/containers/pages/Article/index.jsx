import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";

export default function Article({ path, getArticle }) {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  let { id } = useParams();
  useEffect(() => {
    getArticle(`${path}/${id}`);
    return () => {
      dispatch({ type: "CHANGE_ARTICLE", value: {} });
    };
  }, [dispatch, getArticle, path, id]);
  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="container px-10 md:flex md:justify-between space-y-10 md:space-y-0">
          <div className="kegiatan md:w-3/4 space-y-12">
            <div className="head space-y-8">
              <div className="text">
                <h1 className="font-bold text-2xl">{article.judul}</h1>
                <p className="text-xl">{article.penulis}</p>
                <p className="text-xl">{article.posted}</p>
              </div>

              <div className="img">
                <img
                  className="mx-auto"
                  style={{ width: "450px" }}
                  src={article.img}
                  alt="a"
                />
              </div>
            </div>
            <div className="body text-justify">
              <p>
                {article.isi}
                lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eius eveniet id, praesentium, distinctio quod ducimus iste
                commodi sunt expedita, provident quidem quas sint veniam! Aut,
                necessitatibus ea tempora cupiditate ab eveniet impedit
                voluptatem earum, voluptatibus nemo corrupti delectus fugit
                dolor at in repellendus ducimus sed ipsum quae dolorum
                consequatur sint.
              </p>
            </div>
          </div>
          <div className="border-l border-gray-300 navigation space-y-8">
            <ul className="ml-4">
              <p className="mb-2 font-bold">BERITA TERBARU</p>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
            <ul className="ml-4">
              <p className="mb-2 font-bold">KEGIATAN</p>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="list-disc list-inside">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
