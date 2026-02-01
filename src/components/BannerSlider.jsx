import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bannerimg from "../assets/bannerslider.jpg"

const BannerSlider = () => {
  return (
    <div className="w-full overflow-hidden lg:pl-12.25 lg:pt-10.25">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            src={bannerimg}
            className="w-full h-87.5 object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg}
            className="w-full h-87.5 object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg}
            className="w-full h-87.5 object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg}
            className="w-full h-87.5 object-cover"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg}
            className="w-full h-87.5 object-cover"
            alt="Slide 5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
