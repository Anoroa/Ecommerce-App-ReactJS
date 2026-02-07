import React, {useEffect, useState} from 'react';
import {MdCategory} from "react-icons/md";
import BreadCrumb from "../components/BreadCrumb.jsx";
import axios from "axios";
import Paginate from "../components/Paginate.jsx";
import Skeleton from "../components/Skeleton.jsx";
import {useDispatch} from "react-redux";
import {clearFilter, filterByCategory, setProducts} from "../redux/productSlice.js";

function Shop() {

    // Use Dispatch
    const dispatch = useDispatch();

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    {data ? console.log("data exists") : "data not found"}
    // Effects
    useEffect(() => {
        document.title = "Shop | Exclusive";
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                const products = res.data.products;

                dispatch(setProducts(res.data.products));
                setData(products);
                {products ? console.log("api fetched successfully.") : "fetching..."}
                const uniqueCategories = [
                    ...new Set(products.map(item => item.category))
                ];
                setLoading(false)

                setCategories(uniqueCategories);
            })
            .catch(console.error);
    }, [dispatch]);


    // Handlers
    // show all products
    const handleShowAll = () => {
        dispatch(clearFilter());
    };

    // filter by category
    const handleFilter = (category) => {
        dispatch(filterByCategory(category));
    };



    return (
        <section className={"flex container mt-35.25 relative pb-3"}>
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
                        <li>
                            <button className={"font-bold text-nowrap text-xl cursor-pointer"} onClick={handleShowAll}>
                                All Products
                            </button>
                        </li>

                        {categories.map(category => (
                            <li key={category} onClick={() => handleFilter(category)}>
                                <button
                                    className={"text-nowrap capitalize cursor-pointer"}>{category.replace("-", " ")}</button>
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
                        <option>3</option>
                        <option>6</option>
                        <option>9</option>
                    </select>
                </div>
                <div className="products grid justify-center gap-7.5 grid-cols-[repeat(3,270px)]">
                    {loading
                        ? Array.from({ length: 9 }).map((_, i) => <Skeleton key={i} />)
                        : <Paginate itemsPerPage={9} />
                    }
                </div>
            </div>
        </section>);
}

export default Shop;