import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swipperInfo.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function SwipperInfo() {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="custom-slide1 hover-slide">
            <h3 className="custom-slide-h3">Mortal Kombat X</h3>
            <p className="custom-slide-p">HELLO AGAIN GUY, I OFICIALLY WELCOME YOU TO OUR WEBSITE.</p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide2 hover-slide">
            <p className="custom-slide-p">WE ARE A GROUP OF YOUNG PEOPLE WHO LOVE AUDIOVISUAL MATERIALS</p>
            <h3 className="custom-slide-h3">Shadow of <br/> the Colossus</h3>
        </SwiperSlide>
        <SwiperSlide className="custom-slide3 hover-slide">
            <h3 className="custom-slide-h3">Crash Bandicoot: <br/> The Trilogy</h3>
            <p className="custom-slide-p">BUT THIS TIME WE ARE HERE FOR ONE IN PARTICULAR: <b>VIDEOGAMES</b></p>
        </SwiperSlide>
        <SwiperSlide className="custom-slide4 hover-slide">
            <p className="custom-slide-p">OUR WEBSITE IS INTENDED FOR ALL THE PEOPLE WHO ENJOY THIS HOBBY AS MUCH AS WE DO</p>
            <h3 className="custom-slide-h3">Silent Hill 3</h3>
        </SwiperSlide>
        <SwiperSlide className="custom-slide5 hover-slide">
            <h3 className="custom-slide-h3">Need for speed: <br/> Most wanted </h3>
            <p className="custom-slide-p">SO WE WANT YOU FEEL FREE TO SHARE YOUR TASTES, YOUR HOBBIES AND YOUR OPINIONS WITH THE COMMUNITY :)</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}