import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const success = useSelector((state) => state.success);
  const update = useSelector((state) => state.update);
  if (success)
    return (
      <div
        className="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200"
        role="alert"
      >
        Data <strong>berhasil</strong> {!update ? "ditambahkan" : "diperbarui"}!
      </div>
    );
  return null;
};