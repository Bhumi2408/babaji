"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  "/heros1.png",
  "/heroos2.png",
];

const arrowClass =
  "absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-900 shadow-lg ring-1 ring-black/5 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        className="hero-slider h-[190px] md:h-[500px] lg:h-[700px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button aria-label="Previous slide" className={`hero-prev left-4 lg:left-8 ${arrowClass}`}>
        <ChevronLeft size={26} />
      </button>
      <button aria-label="Next slide" className={`hero-next right-4 lg:right-8 ${arrowClass}`}>
        <ChevronRight size={26} />
      </button>

      <style jsx global>{`
        .hero-slider .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #fff;
          opacity: 0.6;
          transition: all 0.3s;
        }

        .hero-slider .swiper-pagination-bullet-active {
          opacity: 1;
          width: 28px;
          border-radius: 9999px;
          background: #dc2626;
        }
      `}</style>
    </section>
  );
}
