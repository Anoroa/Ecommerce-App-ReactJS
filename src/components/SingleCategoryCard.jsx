import React from "react";

const SingleCategoryCard = ({ icon, content }) => {
  return (
    <div
      className="
        w-37.5 sm:w-40 md:w-45 lg:w-42.5 xl:w-45
        h-35 sm:h-37.5 md:h-40 lg:h-37.5 xl:h-40
        mt-12 flex flex-col justify-center items-center gap-3 sm:gap-4
        border border-black/30 rounded-md
        hover:bg-red-primary hover:text-white hover:border-0
        transition-all duration-200
      "
    >
      <span className="text-3xl sm:text-4xl">{icon}</span>
      <h2 className="text-sm sm:text-base md:text-base lg:text-base">{content}</h2>
    </div>
  );
};

export default SingleCategoryCard;
