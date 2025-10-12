"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MarketingSwiper() {
  const contents = [
    {
      title: (
        <>
          병원 인하우스 <br />
          마케팅·홍보 실무 경험
        </>
      ),
      text: (
        <>
          병원 내부 사정을 가장 잘 아는 건, 직접 경험해 본 사람입니다.
          소이컴퍼니는 실제 병원 안에서 근무하고, 마케팅을 주도해 본 팀장급
          인력이 함께합니다. 단순히 이론이나 외부 시각이 아닌, 원장님의 고민과
          흐름을 잘 이해하는 실무자들이 함께하니까, 진짜 도움이 되는 병원
          마케팅이 가능합니다.
        </>
      ),
    },
    {
      title: <>협력업체</>,
      text: (
        <>
          대표가 직접 소통하고 함께 움직입니다 계약 이후 대표가 사라지고, 실무는
          신입 직원에게 넘어가는 구조. 소이컴퍼니는 그런 방식이 아니라, 대표가
          직접 미팅하고 보고하며 함께 움직입니다. 병원의 목소리를 가장 먼저
          듣고, 가장 많이 생각하는 파트너로서 책임감 있게 함께합니다.
        </>
      ),
    },
    {
      title: <>숫자보다 신뢰와 관계를 먼저</>,
      text: (
        <>
          빠른 성과만 쫒다 보면 금방 한계를 마주합니다. 소이컴퍼니는 병원이
          환자와 맺는 신뢰처럼, 저희 역시 병원과의 관계에서 신뢰를 최우선으로
          합니다. 단기적인 결과보다 ‘함께 오래 가는 관계’를 가치로 두고
          있습니다.
        </>
      ),
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={15}
      slidesPerView={1.1}
    >
      {contents.map((list, index) => (
        <SwiperSlide key={index}>
          <li className="h-[400px] md:w-92.5 md:h-[500px] flex flex-col justify-between text-white py-12.5 px-7.5 bg-[#005432] rounded-[10px_20px_20px_100px]">
            <div>
              <span className="text-3xl font-bold border-b-4 inline-block mb-3.5">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <p className="text-2xl font-bold">{list.title}</p>
            </div>
            <div>
              <p className="text-sm break-keep">{list.text}</p>
            </div>
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
