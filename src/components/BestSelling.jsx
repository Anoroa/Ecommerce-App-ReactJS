import React from "react";
import CommonHead from "./CommonHead";
import TrendingSlider from "./TrendingSlider";

const BestSelling = () => {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-35 container">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <CommonHead header={"This Month"} content={"Best Selling Products"} />
        <button className="text-nowrap bg-red-primary py-2 sm:py-3 px-6 sm:px-12 rounded-md text-white text-sm sm:text-base font-poppins font-medium hover:bg-red-600 transition-colors duration-200">
          View All
        </button>
      </div>
      <TrendingSlider showPagination={true} />
    </div>
  );
};

export default BestSelling;
