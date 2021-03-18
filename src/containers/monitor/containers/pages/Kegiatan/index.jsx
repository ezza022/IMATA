import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataFromAPI } from "../../../../../config/redux/action";

export default function Kegiatan({
  handleChangeFile,
  handleChange,
  handleUpload,
  handleRemove,
  handleSave,
  setImgValue,
  setData,
  setFile,
  update,
  file,
  data,
  urlTemp,
  loading,
  imgValue,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    //declare
    const getData = () => {
      try {
        dispatch(getDataFromAPI("kegiatan"));
      } catch (e) {
        alert(e);
      }
    };
    //summon
    getData();
    //clean up
    return () => {
      let randomString = Math.random().toString(36);
      setFile(null);
      setImgValue(randomString);
      setData({ judul: "", penulis: "", isi: "" });
      dispatch({ type: "CHANGE_URL", value: "" });
      dispatch({ type: "CHANGE_DATA", value: [] });
    };
  }, [dispatch, setData, setFile, setImgValue]);

  return (
    <div className="bg-gray-100 w-full flex justify-center p-1">
      <div className="bg-white container rounded p-5 pb-14 space-y-3 overflow-auto">
        <input
          onChange={handleChangeFile}
          key={imgValue || ""}
          className="block focus:outline-none"
          type="file"
          name="img"
          accept="image/*"
        />
        <div className="upload flex items-center space-x-2">
          {!loading ? (
            <button
              onClick={handleUpload}
              className=" focus:outline-none bg-gray-500 hover:bg-gray-600 ring-1 ring-gray-300 hover:ring-gray-300 py-1 px-5 rounded-md text-white text-sm"
              disabled={!file}
            >
              upload
              <svg
                className="inline ml-2 h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button className=" cursor-not-allowed focus:outline-none bg-white ring-1 ring-gray-300 py-1 px-5 rounded-md text-gray-700 text-sm">
              please wait..
            </button>
          )}
        </div>
        <div className="w-3/4 mx-auto">
          <img src={urlTemp} alt="" />
        </div>
        <input
          value={data.judul}
          placeholder="Judul"
          className="ring-2 ring-gray-300 focus:outline-none w-full"
          type="text"
          onChange={(e) => handleChange(e, "judul")}
        />
        <input
          value={data.penulis}
          placeholder="Penulis"
          className="ring-2 ring-gray-300 focus:outline-none w-full"
          type="text"
          onChange={(e) => handleChange(e, "penulis")}
        />
        <input
          value={data.lokasi}
          placeholder="Lokasi/tempat"
          className="ring-2 ring-gray-300 focus:outline-none w-full"
          type="text"
          onChange={(e) => handleChange(e, "lokasi")}
        />
        <div className="flex space-x-4">
          <input
            value={data.waktu}
            placeholder="waktu"
            className="ring-2 ring-gray-300 focus:outline-none w-full text-center "
            type="text"
            onChange={(e) => handleChange(e, "waktu")}
          />
          <input
            value={data.tanggal}
            placeholder="tanggal"
            className="ring-2 ring-gray-300 focus:outline-none w-full text-center "
            type="text"
            onChange={(e) => handleChange(e, "tanggal")}
          />
          <input
            value={data.bulan}
            placeholder="bulan"
            className="ring-2 ring-gray-300 focus:outline-none w-full text-center "
            type="text"
            onChange={(e) => handleChange(e, "bulan")}
          />
          <input
            value={data.tahun}
            placeholder="tahun"
            className="ring-2 ring-gray-300 focus:outline-none w-full text-center "
            type="text"
            onChange={(e) => handleChange(e, "tahun")}
          />
        </div>

        <textarea
          value={data.isi}
          placeholder="Isi"
          className="h-1/2 ring-2 ring-gray-300 focus:outline-none w-full resize-none"
          onChange={(e) => handleChange(e, "isi")}
        />
        {!loading ? (
          <button
            onClick={() => handleSave("kegiatan")}
            className="ml-5 shadow-md py-1 px-5 rounded-sm text-white ring-2 ring-green-100 hover:ring-green-200 bg-green-300 hover:bg-green-400 focus:outline-none float-right"
          >
            {!update ? "Simpan" : "perbarui"}
          </button>
        ) : (
          <button className="ml-5 cursor-not-allowed focus:outline-none bg-white ring-1 ring-gray-300 py-1 px-5 rounded-md text-gray-700 text-sm float-right">
            please wait..
          </button>
        )}
        {!loading ? (
          update ? (
            <button
              onClick={() => handleRemove("kegiatan")}
              className="ml-5 shadow-md py-1 px-5 rounded-sm text-white ring-2 ring-red-100 hover:ring-red-200 bg-red-300 hover:bg-red-400 focus:outline-none float-right"
            >
              Hapus
            </button>
          ) : null
        ) : (
          <button className=" cursor-not-allowed focus:outline-none bg-white ring-1 ring-gray-300 py-1 px-5 rounded-md text-gray-700 text-sm float-right">
            please wait..
          </button>
        )}
      </div>
    </div>
  );
}
