import React, {useEffect, useState} from 'react';
import {MdCategory} from "react-icons/md";
import {Link} from "react-router";
import BreadCrumb from "../components/BreadCrumb.jsx";
import axios from "axios";
import SingleFlashCard from "../components/SingleFlashCard.jsx";

function Shop() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                setData(res.data.products);
                setCurrentPage(1);
            })
            .catch(console.error);
    }, []);

    // ========PAGINATE CONFIG=========
    // SLICE
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentProducts = data.slice(firstItemIndex, lastItemIndex);
    // config for paginate
    const totalPages = Math.ceil(data.length / itemsPerPage);


    const categories = [
        {content: "Woman’s Fashion", link: "/categories/women",},
        {content: "Men's Fashion", link: "/categories/men",},
        {content: "Electronics", link: "/categories/electronics"},
        {content: "Home & Lifestyle", link: "/categories/lifestyle"},
        {content: "Medicine", link: "/categories/medicine"},
        {content: "Sports and outdoor", link: "/categories/sports"},
        {content: "Baby’s & Toys", link: "/categories/babies-toys"},
        {content: "Groceries", link: "/categories/groceries"},
        {content: "Health and Beauty", link: "/categories/beauty"},
    ];


    return (
        <section className={"flex container mt-35.25 relative"}>
            <div className={"mb-12.5 left-8 -top-10 absolute"}><BreadCrumb/></div>
            {/*=========Categories==========*/}
            <div className="container flex flex-col lg:flex-row gap-6 lg:gap-12">
                {/*  Categories COL_1  */}
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
                    className={`w-full lg:w-1/4 pr-4 lg:pr-5 pt-4 lg:pt-10
              ${isOpen ? "block" : "hidden lg:block"} transition-all duration-300`}
                >
                    <ul className="flex flex-col gap-3 lg:gap-4">
                        {categories.map((items, i) => (
                            <li key={i}>
                                <Link
                                    to={items.link}
                                    className="flex justify-between items-center font-poppins text-base lg:text-[16px] text-nowrap"
                                >
                                    {items.content}
                                    <span className="text-xl lg:text-2xl">{items.icon}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {/* ==============COL_2=================== */}
            <div className={"w-full flex flex-col gap-8"}>
                <div className={"Show flex gap-3 items-center justify-end"}>
                    <h2>Show: </h2>
                    <select
                        className={"appearance-none px-11.25 py-px border border-gray-500/30 outline-0 rounded-md"}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                </div>
                <div className="products grid justify-center gap-7.5 grid-cols-[repeat(3,270px)]">
                    {currentProducts.map((item, i) => (
                        <SingleFlashCard
                            key={i}
                            image={item.thumbnail}
                            title={item.title}
                            newPrice={item.discountPercentage}
                            oldPrice={item.price}
                            rating={item.rating}
                            reviews={item.reviews.length}
                        />
                    ))}
                </div>
                {/*     Paginate buttons   */}
                <div className="flex justify-center gap-3 mt-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({length: totalPages}, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 border rounded ${
                                currentPage === i + 1 ? "bg-black text-white" : ""
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Shop;