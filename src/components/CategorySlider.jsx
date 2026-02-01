import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingleCategoryCard from "./SingleCategoryCard";
import { BsPhone } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";

export default function CategorySlider() {
  const swiperRef = useRef(null);

  const contents = [
    { content: "Phones", icon: <BsPhone /> },
    { content: "Computers", icon: <HiOutlineDesktopComputer /> },
    { content: "SmartWatches", icon: <IoWatchOutline /> },
    { content: "Camera", icon: <CiCamera /> },
    { content: "Headphones", icon: <FiHeadphones /> },
    { content: "Gaming", icon: <LuGamepad /> },
    { content: "Headphones", icon: <FiHeadphones /> },
    { content: "Camera", icon: <CiCamera /> },
  ];

  return (
    <div className="relative">
      {/* Custom Prev Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute right-12 -top-1/12 -translate-y-1/2 z-10 bg-[#F5F5F5] p-3 rounded-full shadow hover:bg-gray-200 hover:cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      {/* Custom Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 -top-1/12 -translate-y-1/2 z-10 bg-[#F5F5F5] p-3 rounded-full shadow hover:bg-gray-200 hover:cursor-pointer"
      >
        <FaArrowRight />
      </button>

      <Swiper
        modules={[Mousewheel]}
        spaceBetween={20} // smaller gap on mobile
        slidesPerView={6} // default desktop
        mousewheel={{ forceToAxis: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 }, // mobile
          480: { slidesPerView: 3, spaceBetween: 15 }, // small tablets
          768: { slidesPerView: 4, spaceBetween: 20 }, // tablets
          1024: { slidesPerView: 5, spaceBetween: 25 }, // small desktops
          1280: { slidesPerView: 6, spaceBetween: 30 }, // large desktops
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {contents.map((item, i) => (
          <SwiperSlide key={i}>
            <SingleCategoryCard content={item.content} icon={item.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
