import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-black w-full text-white">
      <div className="container py-3 relative flex items-center justify-center">
        {/* Center Text */}
        <h3 className="text-xs lg:text-sm md:text-base text-center px-6">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link to="/" className="font-bold underline ml-1 text-xs lg:text-sm">
            Shop Now
          </Link>
        </h3>

        {/* Language Selector */}
        <select
          name="lang"
          className="absolute right-4 bottom-3 bg-black text-white text-sm outline-none cursor-pointer hidden lg:inline-block"
        >
          <option value="english" className="text-white">
            English
          </option>
          <option value="bangla" className="text-white">
            Bangla
          </option>
          <option value="arabic" className="text-white">
            Arabic
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
