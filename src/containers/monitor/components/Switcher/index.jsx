import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Switcher({ handleRewrite, handleSwitch }) {
  const [data, setData] = useState([]);
  const dataAPI = useSelector((state) => state.data);

  useEffect(() => {
    setData(dataAPI);
  }, [dataAPI]);

  return (
    <div className="list w-56 p-5 overflow-auto">
      <ul className="space-y-3">
        <li>
          <button
            onClick={handleRewrite}
            className=" bg-gray-300 hover:bg-gray-400 rounded-md py-1 w-full focus:outline-none flex items-center justify-center"
          >
            <svg
              className="h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Baru</span>
          </button>
        </li>
        {data !== []
          ? data.map((api, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSwitch(api)}
                  className=" bg-gray-300 hover:bg-gray-400 rounded-md py-1 w-full focus:outline-none"
                >
                  {api.data.judul}
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
