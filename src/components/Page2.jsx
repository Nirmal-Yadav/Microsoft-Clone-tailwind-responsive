import React from "react";

const Page2 = () => {
  return (
    <div className="slider md:h-[60vh] flex flex-col-reverse md:flex-row bg-[#e8e8e8] items-center ">
      <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-32 space-y-5 h-[25vh] ">
        <h1 className="text-2xl font-medium md:text-4xl mx-5 ">
          Surface Laptop 4
        </h1>
        <p className="w-3/4 mx-5 justify-center items-center text-center md:text-left">
          A sleek laptop with a 12.4-inch touchscreen, great typing experience
          and improved HD camera
        </p>
        <button className="bg-black text-white px-4 py-2 my-6 mx-5 font-bold">
          {"Shop Now >"}
        </button>
      </div>
      <div className="right">
        <img
          className="w-[44rem] h-[40vh] md:w-[64rem] md:h-[60vh]"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-2-01-M01:VP1-539x440"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page2;
