import React from "react";

const Skeleton = () => {
    return (
        <div className="max-w-67.5 w-full flex flex-col overflow-hidden mt-10 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-64 bg-gray-200 rounded-md relative">
                {/* Discount badge */}
                <div className="absolute top-1 left-2 w-12 h-6 bg-gray-300 rounded-md" />

                {/* Icons */}
                <div className="absolute top-2 right-3 w-8 h-8 bg-gray-300 rounded-full" />
                <div className="absolute top-12 right-3 w-8 h-8 bg-gray-300 rounded-full" />

                {/* Add to cart bar */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gray-300 rounded-b-xl" />
            </div>

            {/* Title */}
            <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded" />

            {/* Prices */}
            <div className="flex gap-3 mt-3">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>

            {/* Rating */}
            <div className="flex gap-2 mt-3 items-center">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-3 w-10 bg-gray-200 rounded" />
            </div>
        </div>
    );
};

export default Skeleton;
