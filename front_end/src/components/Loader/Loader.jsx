import React from "react";
import "./loader.css";

function Loader() {
  return (
    <>
    <div className="w-full h-screen bg-slate-600 opacity-20"></div>
    <div className="w-full h-full">
      <div className="fancy-spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="dot"></div>
      </div>
    </div>
    </>
  );
}

export default Loader;
