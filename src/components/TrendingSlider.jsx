import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SingleFlashCard from "./SingleFlashCard";
import cardImg from "../assets/controller.png";
import chair from "../assets/chair.png";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";

export default function TrendingSlider({ showPagination }) {
  const swiperRef = useRef(null);

  return (


      <Swiper
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20} // default small spacing
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 }, // mobile
          480: { slidesPerView: 2, spaceBetween: 15 }, // small tablet
          768: { slidesPerView: 3, spaceBetween: 20 }, // tablet
          1024: { slidesPerView: 4, spaceBetween: 25 }, // desktop
          1280: { slidesPerView: 5, spaceBetween: 30 }, // large desktop
        }}
      >
        {[cardImg, chair, monitor, keyboard, cardImg, cardImg].map((img, i) => (
          <SwiperSlide key={i}>
            <SingleFlashCard
              image={img}
              title={"Product Name"}
              newPrice={120}
              oldPrice={160}
              rating={3}
              reviews={88}
            />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
