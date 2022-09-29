import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiperVertical.css";
// import required modules
import { Pagination, Autoplay } from "swiper";
// My imports
import fewGames from "../games.json"

export default function SwiperVertical() {

  return (
    <>
      <Swiper
        slidesPerView={4}
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
        {fewGames?.map(element => {
            let render = 

            <SwiperSlide key={element.image} >
                <img src={element.image} />
            </SwiperSlide>

            return render
        })}
      </Swiper>
    </>
  );
}