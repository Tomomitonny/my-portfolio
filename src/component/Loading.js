// src/components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="./img/loding.png"
        className="animate-ping h-8 w-8 rounded-xl"
        />
      {/* <img
        src="./img/loding.png"
        className="animate-spin h-8 w-8 rounded-xl mx-4"
        />
      <img
        src="./img/loding.png"
        className="animate-spin h-8 w-8 rounded-xl"
        /> */}
    </div>
  );
};

export default Loading;
