import React from "react";
import FlashSalesTimer from "./FlashSalesTimer";
import FlashSlider from "./FlashSlider";

const FlashSales = () => {
  return (
    <div className="container mt-16 md:mt-24 lg:mt-38.5">
      {/* Section label */}
      <div className="flex items-center gap-4">
        <span className="block w-5 h-10 rounded-md bg-red-primary"></span>
        <h2 className="text-red-primary font-semibold">Today’s</h2>
      </div>

      {/* Title + Timer */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-21.75">
        <h1 className="mt-6 font-semibold pb-2.75">Flash Sales</h1>
        <FlashSalesTimer />
      </div>

      {/* Products */}
      <div className="products">
        <FlashSlider showPagination />
      </div>
    </div>
  );
};

export default FlashSales;
