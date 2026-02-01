import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Rating = ({ number }) => {
  return (
    <>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <span key={index} className="flex items-center">
              {index < number ? (
                <FaStar className="text-amber-400 text-base" />
              ) : (
                <CiStar className="text-amber-600 text-lg" />
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Rating;
