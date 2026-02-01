import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
    { title: "Sign Up", path: "/sign-up" },
  ];

  return (
    <div className="pb-7">
      <div className="container pt-7 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav (lg+) */}
        <ul className="hidden lg:flex gap-12 font-poppins">
          {navLinks.map((e, i) => (
            <li
              key={i}
              className="relative inline-block
                before:content-['']
                before:absolute
                before:left-0
                before:-bottom-1
                before:w-0
                before:h-0.5
                before:bg-black
                before:transition-all
                before:duration-300
                hover:before:w-full"
            >
              <Link to={e.path}>{e.title}</Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search (lg+) */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-inputbg py-1.75 pr-3 pl-5 shadow-sm w-60.75 placeholder:text-[12px] outline-0 rounded-md"
            />
            <button className="absolute right-3.5 top-2 text-xl">
              <FiSearch />
            </button>
          </div>

          <FaRegHeart className="text-2xl hidden lg:block" />
          <AiOutlineShoppingCart className="text-3xl hidden lg:block" />

          {/* Hamburger (sm + md) */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 font-poppins">
          {navLinks.map((e, i) => (
            <li key={i} onClick={() => setOpen(false)}>
              <Link to={e.path} className="block py-2 border-b">
                {e.title}
              </Link>
            </li>
          ))}

          <div className="flex gap-6 pt-4">
            <FaRegHeart className="text-2xl" />
            <AiOutlineShoppingCart className="text-3xl" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
