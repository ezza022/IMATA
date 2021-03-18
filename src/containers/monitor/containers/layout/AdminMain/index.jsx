import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addDataToAPI,
  deleteDataAPI,
  updateDatatoAPI,
  UploadDataAPI,
} from "../../../../../config/redux/action";

import { Alert } from "../../../components/Alert";
import Switcher from "../../../components/Switcher";

import Kegiatan from "../../pages/Kegiatan";
import Berita from "../../pages/Berita";
import { Route, Switch } from "react-router";

export default function AdminMain() {
  //useState
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    judul: "",
    penulis: "",
    isi: "",
    lokasi: "",
    waktu: "",
    tanggal: "",
    bulan: "",
    tahun: "",
  });
  const [imgValue, setImgValue] = useState("");
  const [id, setId] = useState("");

  //useSelector
  const urlTemp = useSelector((state) => state.urlTemp);
  const loading = useSelector((state) => state.loading);
  const update = useSelector((state) => state.update);
  const exist = useSelector((state) => state.exist);

  //date
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const fullDate = `${date}/${month}/${year}`;

  //useDispatch
  const dispatch = useDispatch();

  //handler
  function handleChange(e, type) {
    dispatch({ type: "CHANGE_SUCCESS", value: false });
    setData({ ...data, [type]: e.target.value });
  }

  function handleChangeFile(e) {
    dispatch({ type: "CHANGE_SUCCESS", value: false });
    setFile(e.target.files[0]);
  }

  function handleRewrite() {
    setData({
      judul: "",
      penulis: "",
      isi: "",
      lokasi: "",
      waktu: "",
      tanggal: "",
      bulan: "",
      tahun: "",
    });
    setFile(null);
    dispatch({ type: "CHANGE_URL", value: "" });
    dispatch({ type: "CHANGE_UPDATE", value: false });
    dispatch({ type: "CHANGE_SUCCESS", value: false });
  }

  function handleSwitch(api) {
    if (!api.data.waktu) {
      setData({
        judul: api.data.judul,
        penulis: api.data.penulis,
        isi: api.data.isi,
      });
    } else {
      setData({
        judul: api.data.judul,
        penulis: api.data.penulis,
        isi: api.data.isi,
        lokasi: api.data.lokasi,
        waktu: api.data.waktu.pukul,
        tanggal: api.data.waktu.tanggal,
        bulan: api.data.waktu.bulan,
        tahun: api.data.waktu.tahun,
      });
    }
    setId(api.id);
    setFile(null);
    dispatch({ type: "CHANGE_URL", value: api.data.img });
    dispatch({ type: "CHANGE_UPDATE", value: true });
    dispatch({ type: "CHANGE_SUCCESS", value: false });
  }

  //async function
  async function handleUpload(e) {
    e.preventDefault();
    dispatch({ type: "CHANGE_LOADING", value: true });
    try {
      dispatch(await UploadDataAPI("temp", fullDate, file));
    } catch (e) {
      alert(e);
    }
  }
  async function handleSave(path) {
    //set data
    let fullData = {};
    switch (path) {
      case "berita":
        fullData = {
          judul: data.judul,
          penulis: data.penulis,
          isi: data.isi,
        };
        break;
      case "kegiatan":
        fullData = {
          judul: data.judul,
          penulis: data.penulis,
          isi: data.isi,
          lokasi: data.lokasi,
          waktu: data.waktu,
          tanggal: data.tanggal,
          bulan: data.bulan,
          tahun: data.tahun,
        };
        break;
      default:
        break;
    }
    dispatch({ type: "CHANGE_LOADING", value: true });
    if (fullData.judul && fullData.penulis && fullData.isi !== "") {
      try {
        let randomString = Math.random().toString(36);
        if (!update) {
          dispatch(await addDataToAPI(path, fullData, file, fullDate));
          dispatch({ type: "CHANGE_URL", value: null });
          switch (path) {
            case "berita":
              setData({ judul: "", penulis: "", isi: "" });
              break;
            case "kegiatan":
              setData({
                judul: "",
                penulis: "",
                isi: "",
                lokasi: "",
                waktu: "",
                tanggal: "",
                bulan: "",
                tahun: "",
              });
              break;
            default:
              break;
          }
          setImgValue(randomString);
          setFile(null);
        } else {
          dispatch(await updateDatatoAPI(path, fullData, file, fullDate, id));
          setFile(null);
          setImgValue(randomString);
        }
      } catch (e) {
        alert(e);
      }
    } else {
      alert("data tidak boleh kosong");
      dispatch({ type: "CHANGE_LOADING", value: false });
    }
  }

  async function handleRemove(path) {
    try {
      dispatch(deleteDataAPI(path, id));
      switch (path) {
        case "berita":
          setData({ judul: "", penulis: "", isi: "" });
          break;
        case "kegiatan":
          setData({
            judul: "",
            penulis: "",
            isi: "",
            lokasi: "",
            waktu: "",
            tanggal: "",
            bulan: "",
            tahun: "",
          });
          break;
        default:
          break;
      }
      if (!exist) {
        dispatch({ type: "CHANGE_DATA", value: [] });
      }
      let randomString = Math.random().toString(36);
      dispatch({ type: "CHANGE_UPDATE", value: false });
      dispatch({ type: "CHANGE_URL", value: null });
      setImgValue(randomString);
      setFile(null);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto px-6">
        <Alert />
        <div className="bg-white text-black">
          <div className="bg-white flex " style={{ height: "500px" }}>
            <Switcher
              handleSwitch={handleSwitch}
              handleRewrite={handleRewrite}
            />
            <Switch>
              <Route exact path="/admin">
                <Berita
                  handleChangeFile={handleChangeFile}
                  handleRewrite={handleRewrite}
                  handleChange={handleChange}
                  handleUpload={handleUpload}
                  setImgValue={setImgValue}
                  handleSave={handleSave}
                  handleRemove={handleRemove}
                  setData={setData}
                  setFile={setFile}
                  data={data}
                  file={file}
                  update={update}
                  urlTemp={urlTemp}
                  loading={loading}
                  imgValue={imgValue}
                />
              </Route>
              <Route exact path="/admin/kegiatan">
                <Kegiatan
                  handleChangeFile={handleChangeFile}
                  handleRewrite={handleRewrite}
                  handleChange={handleChange}
                  handleUpload={handleUpload}
                  handleRemove={handleRemove}
                  setImgValue={setImgValue}
                  handleSave={handleSave}
                  setData={setData}
                  setFile={setFile}
                  data={data}
                  file={file}
                  update={update}
                  urlTemp={urlTemp}
                  loading={loading}
                  imgValue={imgValue}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  );
}
