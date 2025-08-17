"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import bannerImage1 from "@/assets/banner/banner1.jpg";
import bannerImage2 from "@/assets/banner/banner2.jpg";
import bannerImage3 from "@/assets/banner/banner3.jpg";
import SearchOverlay from "./SearchOverlay";

const bannerData = [
  {
    id: 1,
    image: bannerImage1,
    title: "Discover Amazing Singapore",
    subtitle: "Experience the Garden City Like Never Before",
    description: "Explore iconic landmarks, vibrant culture, and world-class attractions in the heart of Southeast Asia.",
  },
  {
    id: 2,
    image: bannerImage2,
    title: "Unforgettable Adventures Await",
    subtitle: "From Marina Bay to Sentosa Island",
    description: "Create lasting memories with our curated tours designed for every type of traveler.",
  },
  {
    id: 3,
    image: bannerImage3,
    title: "Your Perfect Singapore Experience",
    subtitle: "Tailored Tours for Every Traveler",
    description: "Join thousands of satisfied travelers who have discovered Singapore with our expert guides.",
  }
];


const Banner = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white !scale-125",
        }}
        navigation={true}
        loop={true}
        className="h-[500px] md:h-[600px] lg:h-[700px]"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id} className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
                priority={banner.id === 1}
                quality={90}
              />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                  {/* Subtitle */}
                  <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium mb-2 md:mb-4 tracking-wide uppercase">
                    {banner.subtitle}
                  </p>
                  
                  {/* Main Title */}
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                    {banner.title}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                    {banner.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Overlay */}
      <SearchOverlay />

    
    </section>
  );
};

export default Banner;