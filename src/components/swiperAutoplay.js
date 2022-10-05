import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperVertical.css";
// import required modules
import { Autoplay, Pagination} from "swiper";

export default function SwiperAutoplay(props) {

    const details = props.details

  return (
    <>
      <Swiper
      slidesPerView={1}
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="custom-slider-details"><img className="custom-slider-autoplay" src={details? details.image2 : null} /></SwiperSlide>
        <SwiperSlide className="custom-slider-details"><img className="custom-slider-autoplay" src={details? details.image3 : null} /></SwiperSlide>
        <SwiperSlide className="custom-slider-details"><img className="custom-slider-autoplay" src={details? details.image4 : null} /></SwiperSlide>
        <SwiperSlide className="custom-slider-details"><img className="custom-slider-autoplay" src={details? details.image : null} /></SwiperSlide>
      </Swiper>
    </>
  );
}