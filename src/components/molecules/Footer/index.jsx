import React from "react";
// import Contact from "../../atom/Contact";
// import SocialMedia from "../../atom/SocialMedia";

export default function Footer() {
  return (
    <footer className="">
      {/* <div className="container text-2xl flex justify-center w-3/4 mx-auto box-border py-24">
        <SocialMedia/>
        <Contact/>
      </div> */}
      <div className="copyright h-10 flex items-center justify-center bg-dark-md text-white ">
        <h1>Developed by <span className="font-bold">Mahasiswa Tamiang</span> </h1>
      </div>
    </footer>
  );
}
