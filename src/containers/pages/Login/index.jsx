import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInToDatabase } from "../../../config/redux/action";


export default function Login() {
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const loading = useSelector((state) => state.loading);
  const history = useHistory();
  const dispatch = useDispatch();
  const buttonLoading = () => {
    if(loading){
      return "bg-gray-600 text-bg-gray-900 cursor-not-allowed"
    }else{
      return "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
    }
  }
  const SignIn = async (data) => {
    try {
      dispatch(await signInToDatabase(data)).then(() => history.push("/admin"));
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded-md px-12 pt-6 pb-8 mb-4">
          <div className="text-gray-800 text-2xl flex justify-center font-bold py-2 mb-4">
            Silahkan Login
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              v-model="form.email"
              type="email"
              required
              autoFocus
              autoComplete="username"
              placeholder="Email"
              onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autoComplete="current-password"
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={"focus:outline-none px-4 py-2 rounded inline-block shadow-lg "+buttonLoading()}
              type="button"
              onClick={() => SignIn(admin)}
            >
              {!loading?"Sign in":"Loading...."}
            </button>
            <a
              className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800 focus:outline-none"
              href="a"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">©2020 someone.</p>
      </div>
    </div>
  );
}
