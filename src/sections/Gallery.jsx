import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.css";

// required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// assets
import { brow1, brow2, lips1, lips2, lips3 } from "../assets/gallery";

const Gallery = () => {
  const images = [
    lips1,
    brow1,
    lips2,
    brow2,
    lips3,
    brow1,
    lips1,
    brow2,
    lips2,
  ];
  return (
    <Fade>
      <div className="gallery" id="gallery">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="gallery__image" src={image} alt="pmu" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default Gallery;
