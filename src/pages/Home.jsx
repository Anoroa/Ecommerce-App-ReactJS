import React, {useEffect} from "react";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import BrowseCategory from "../components/BrowseCategory";
import BestSelling from "../components/BestSelling";
import EnhanceMusic from "../components/EnhanceMusic.jsx";
import OurProducts from "../components/OurProducts.jsx";

const Home = () => {

    useEffect(() => {
        document.title = "Exclusive";
    }, [])

    return (
        <div className="flex flex-col ">
            <div className="w-full bg-black/30 h-px"></div>
            <Banner/>
            <FlashSales/>
            <BrowseCategory/>
            <BestSelling/>
            <EnhanceMusic/>
            <OurProducts />
        </div>
    );
};

export default Home;
