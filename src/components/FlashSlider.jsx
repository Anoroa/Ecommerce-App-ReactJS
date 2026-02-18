import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SingleFlashCard from "./SingleFlashCard";
import cardImg from "../assets/controller.png";
import chair from "../assets/chair.png";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import axios from "axios";

export default function FlashSlider({ showPagination }) {
  const swiperRef = useRef(null);

  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then((res)=>setFetchedData(res.data.products))
    .catch((err)=>console.error(err))
  }, []);

  return (
    <div className="relative">
      {showPagination && (
        <>
          {/* Prev */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden lg:flex absolute right-12 -top-1/12 -translate-y-1/2 z-10 bg-[#F5F5F5] p-3 rounded-full shadow hover:bg-gray-200"
          >
            <FaArrowLeft />
          </button>

          {/* Next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden lg:flex absolute right-0 -top-1/12 -translate-y-1/2 z-10 bg-[#F5F5F5] p-3 rounded-full shadow hover:bg-gray-200"
          >
            <FaArrowRight />
          </button>
        </>
      )}

      <Swiper
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        loop
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1.3 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {fetchedData.map((item, i) => (
          <SwiperSlide key={i}>
            <SingleFlashCard
              key={i}
              image={item.thumbnail}
              title={item.title}
              newPrice={item.discountPercentage}
              oldPrice={item.price}
              rating={item.rating}
              reviews={item.reviews.length}
              id={item.id}
              productDetail={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
