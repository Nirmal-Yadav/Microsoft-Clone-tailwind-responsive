import React from "react";

const Page = () => {
  return (
    <div className="navbar flex justify-between items-center p-4">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburger inline-block p-4 cursor-pointer md:hidden ">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line  h-0.5 w-6 my-1 bg-black"></div>
          <div className="line  h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="search md:hidden w-4 mr-6">
          <img src="../Assests/icons8-search.svg" alt="" />
        </div>
      </div>
      <div className="logo text-center flex md:order-1">
        <div className="p-4 flex justify-start">
          <img
            className=" md:w-[50%]"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt=""
          />
        </div>
        <div
          className="features  absolute
          md:static w-fit md:w-auto md:items-center bg-gray-200 md:bg-white inset-0 md:flex md:mx-4 md:space-x-6 -translate-x-[30rem] md:-translate-x-0"
        >
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            Microsoft 365
          </div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            Office
          </div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            Windows
          </div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            {" "}
            Surface
          </div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            Xbox
          </div>
          <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">
            Support
          </div>
        </div>
      </div>
      <div className="logo text-center md:order-3 flex">
        <div className="search hidden md:block mr-6">All Microsoft</div>
        <div className="mx-2">Search</div>
        <img className="w-4 mr-6" src="../Assests/icons8-search.svg" alt="" />

        <div className="flex pt-1">
          <img
            className="w-4 mr-4 h-4"
            src="../Assests/icons8-search.svg"
            alt=""
          />
          <img
            className="w-4 mr-4 h-4"
            src="../Assests/icons8-search.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
