import React from "react";
import FlashSlider from "./FlashSlider";

const CommonHead = ({header, content}) => {
  return (
    <div className="container">
      <div className="flex items-center gap-4">
        <span className="block w-5 h-10 rounded-md bg-red-primary"></span>
        <h2 className="text-red-primary font-semibold">{header}</h2>
      </div>
      <div className="flex items-center gap-21.75">
        <h1 className="mt-6 font-semibold pb-2.75">{content}</h1>
      </div>
      {/* <div className="products">
        <FlashSlider />
      </div> */}
    </div>
  );
};

export default CommonHead;
