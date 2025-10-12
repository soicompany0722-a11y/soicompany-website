"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LogoSlider() {
  const logoList = [
    "/logo-slide-1.png",
    "/logo-slide-2.png",
    "/logo-slide-3.png",
    "/logo-slide-4.png",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      slidesPerView="auto"
      autoplay={{
        delay: 0, // 슬라이드 지연 없이 바로 움직임
        disableOnInteraction: false, // 클릭/터치 후에도 자동 재생
        pauseOnMouseEnter: true, // 마우스 올리면 잠시 멈춤
      }}
      speed={5000}
      allowTouchMove={false}
    >
      {logoList.map((list, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-[250px] h-[100px]">
            <Image src={list} alt={`logo${index + 1}`} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
