import React from "react";
// import Coop from "../../../components/molecules/Coop";
import Jumbotron from "../../../components/molecules/Jumbotron";
import Navbar from "../../../components/molecules/Navbar";
import Footer from "../../../components/molecules/Footer";
import AboutTemp from "../../templates/AboutTemp";
import EventTemp from "../../templates/EventTemp";
import NewsTemp from "../../templates/NewsTemp";
import { useDispatch } from "react-redux";
import { getDataFromAPI } from "../../../config/redux/action";

export default function Home() {
  const dispatch = useDispatch();
  const getData = (path) => {
    try {
      dispatch(getDataFromAPI(path));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutTemp />
      <EventTemp getData={getData} />
      <NewsTemp getData={getData} />
      {/* <Coop /> */}
      <Footer />
    </>
  );
}
