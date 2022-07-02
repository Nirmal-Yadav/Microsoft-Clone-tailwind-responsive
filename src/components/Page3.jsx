import React from "react";

const Page3 = () => {
  return (
    <div className="promo justify-center space-y-6 flex flex-col lg:flex-row">
      <div className="item mt-6 flex md:flex-col items-center mx-4 space-x-2">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40"
          alt=""
        />
        <span className="font-medium  md:w-[8rem] md:text-center text-sm my-4">
          Choose your microsoft 365
        </span>
      </div>
      <div className="item flex items-center md:flex-col mx-4 space-x-2">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-surface-kickstand-120x120?wid=40&hei=40"
          alt=""
        />
        <span className="font-medium  md:w-[8rem] md:text-center text-sm my-4">
          Explore Surface devices
        </span>
      </div>
      <div className="item flex md:flex-col items-center mx-4 space-x-2">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-ICON-LL-xbox-logo-120x120?wid=40&hei=40"
          alt=""
        />
        <span className="font-medium  md:w-[8rem] md:text-center text-sm my-4">
          Buy Xbox games
        </span>
      </div>
      <div className="item flex md:flex-col items-center mx-4 space-x-2">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40"
          alt=""
        />
        <span className="font-medium  md:w-[8rem] md:text-center text-sm my-4">
          Get Windows 11
        </span>
      </div>
    </div>
  );
};
export default Page3;
