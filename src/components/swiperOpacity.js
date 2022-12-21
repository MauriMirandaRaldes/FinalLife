// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
// myImports
import {useSelector} from "react-redux"

export default function SwiperOpacity() {

    const data = useSelector(store => store.gamesReducer.oneGame)
    const box = []
    if (data){
        const finalData = [{image:data.image},{image:data.image2},{image:data.image3},{image:data.image4}]
        box.push(...finalData)
    }

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {box.length > 0? box.map((element, index) => (
            <SwiperSlide key={index}>
             <img src={element.image} alt={element.image} />
            </SwiperSlide>
        )) : null}
      </Swiper>
    </>
  );
}
