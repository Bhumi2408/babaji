"use client";

import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const defaultTestimonials = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    review:
      "Babaji Mustard Oil has become a staple in our kitchen. The purity and aroma remind us of traditional homemade food.",
  },
  {
    name: "Priya Verma",
    location: "Lucknow",
    review:
      "The quality of Babaji Besan and Atta is outstanding. Every meal feels healthier and more authentic.",
  },
  {
    name: "Ankit Gupta",
    location: "Jaipur",
    review:
      "Excellent product range and consistent quality. We have been using Babaji products for years.",
  },
  {
    name: "Sunita Mishra",
    location: "Patna",
    review:
      "The pulses are clean, nutritious and cook perfectly every time. Highly recommended.",
  },
  {
    name: "Vikas Agarwal",
    location: "Kanpur",
    review:
      "Trusted brand with genuine quality. The oils and grocery products are worth every penny.",
  },
  {
    name: "Neha Singh",
    location: "Noida",
    review:
      "High-quality products with authentic taste. My family loves Babaji products.",
  },
];

const themes = {
  red: {
    badge: "bg-red-100 text-red-600",
    avatar: "from-red-600 to-red-700",
    quote: "text-red-100",
    hover: "hover:bg-red-600 hover:border-red-600",
    bullet: "#dc2626",
    bg: "from-white via-red-50/40 to-white",
  },
  blue: {
    badge: "bg-blue-100 text-blue-800",
    avatar: "from-blue-800 to-blue-950",
    quote: "text-blue-100",
    hover: "hover:bg-blue-900 hover:border-blue-900",
    bullet: "#1e3a8a",
    bg: "from-white via-blue-50/50 to-white",
  },
};

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  badge = "Customer Reviews",
  title = "What Our Customers Say",
  subtitle = "Trusted by families across India for quality, purity and taste.",
  theme = "red",
}) {
  const t = themes[theme] ?? themes.red;
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const prevClass = `t-prev-${uid}`;
  const nextClass = `t-next-${uid}`;

  return (
    <section className={`py-16 md:py-20 bg-linear-to-b ${t.bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${t.badge}`}>
              {badge}
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="mt-4 text-gray-600">{subtitle}</p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              aria-label="Previous testimonial"
              className={`${prevClass} w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm flex items-center justify-center hover:text-white transition-all duration-300 ${t.hover}`}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Next testimonial"
              className={`${nextClass} w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm flex items-center justify-center hover:text-white transition-all duration-300 ${t.hover}`}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={testimonials.length > 3}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider pb-14! px-1! pt-2!"
          style={{ "--bullet-active": t.bullet }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto!">
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col">

                <Quote
                  className={`absolute top-6 right-6 w-14 h-14 ${t.quote}`}
                  fill="currentColor"
                  strokeWidth={0}
                />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="flex-1 text-gray-600 text-base md:text-lg leading-8">
                  &ldquo;{item.review}&rdquo;
                </p>

                {/* Customer */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-linear-to-br ${t.avatar} text-white flex items-center justify-center font-bold text-xl shrink-0`}>
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style jsx global>{`
        .testimonial-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }

        .testimonial-slider .swiper-pagination-bullet-active {
          background: var(--bullet-active, #dc2626);
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
