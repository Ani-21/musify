import React from "react";

// import { loader } from "../assets";

const Loader = () => (
  <div className="w-full flex justify-center items-center flex-col">
    <img alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">Loading</h1>
  </div>
);

export default Loader;
