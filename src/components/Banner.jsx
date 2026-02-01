import React, { useState } from "react";
import { MdChevronRight, MdCategory } from "react-icons/md";
import { Link } from "react-router";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      content: "Woman’s Fashion",
      link: "/categories/women",
      icon: <MdChevronRight />,
    },
    {
      content: "Men's Fashion",
      link: "/categories/men",
      icon: <MdChevronRight />,
    },
    { content: "Electronics", link: "/categories/electronics" },
    { content: "Home & Lifestyle", link: "/categories/lifestyle" },
    { content: "Medicine", link: "/categories/medicine" },
    { content: "Sports and outdoor", link: "/categories/sports" },
    { content: "Baby’s & Toys", link: "/categories/babies-toys" },
    { content: "Groceries", link: "/categories/groceries" },
    { content: "Health and Beauty", link: "/categories/beauty" },
  ];

  return (
    <div className="container flex flex-col lg:flex-row gap-6 lg:gap-12">
      {/* Mobile toggle icon */}
      <div className="lg:hidden flex items-center mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl p-2 transform transition-transform duration-300`}
          aria-label="Toggle categories"
        >
          <MdCategory
            className={`${isOpen ? "rotate-90" : "rotate-0"} transition-transform duration-300`}
          />
        </button>
      </div>

      {/* Categories */}
      <div
        className={`w-full lg:w-1/4 border-r border-black/30 pr-4 lg:pr-5 pt-4 lg:pt-10
          ${isOpen ? "block" : "hidden lg:block"} transition-all duration-300`}
      >
        <ul className="flex flex-col gap-3 lg:gap-4">
          {categories.map((items, i) => (
            <li key={i}>
              <Link
                to={items.link}
                className="flex justify-between items-center font-poppins text-base lg:text-[16px]"
              >
                {items.content}
                <span className="text-xl lg:text-2xl">{items.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      <div className="w-full lg:w-3/4">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Banner;
