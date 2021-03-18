//libraries
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getDataArticle, getDataFromAPI } from "../../../config/redux/action";

//pages
import Home from "../Home";
import Login from "../Login";
import Admin from "../Admin";
import More from "../More";
import Article from "../Article"

//style
import "./index.css";

export default function App() {
  const dispatch = useDispatch();

  const getData = (path) => {
    try {
      dispatch(getDataFromAPI(path));
    } catch (e) {
      alert(e);
    }
  };

  const getArticle = (path) => {
    try {
      dispatch(getDataArticle(path));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/kegiatan">
            <More path="kegiatan" getData={getData} />
          </Route>
          <Route path="/kegiatan/:id">
            <Article path="kegiatan" getArticle={getArticle} />
          </Route>
          <Route exact path="/berita">
            <More path="berita" getData={getData} />
          </Route>
          <Route path="/berita/:id">
            <Article path="berita" getArticle={getArticle} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
