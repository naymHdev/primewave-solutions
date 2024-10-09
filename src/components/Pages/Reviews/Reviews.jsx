"use client";

import { reviews } from "@/data/reviews";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdVerified,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const ReviewSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0 mt-24 grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
        <div className=" col-span-full md:col-span-2">
          <div className=" flex flex-col items-center justify-start space-y-2 text-center">
            <h3 className="font-black text-xl text-secondary">EXCELLENT</h3>
            <Image
              src="/icons/rating.png"
              alt="Google Rating in PrimeWave Solutions"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <p className=" font-medium">
              Based on{" "}
              <span className="font-bold underline text-secondary">
                {reviews?.length} reviews
              </span>
            </p>
            <div className=" flex items-center gap-1">
              <MdVerified className="text-green-700 size-6" />
              <p className="font-bold">Trustindex</p>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="bg-white shadow-lg rounded-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <Image
                          src={review.profile}
                          alt={review.name}
                          width={50}
                          height={50}
                          priority={true}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <div>
                    <FcGoogle className="size-10" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.849 1.418 8.282L12 19.375l-7.418 4.504L6 15.597.001 9.748l8.332-1.73L12 .587z" />
                    </svg>
                  ))}
                  <MdVerified className="text-sky-600 h-5 w-5 ml-2" />
                </div>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </SwiperSlide>
            ))}

            {/* Navigation arrows */}
            <div className="swiper-button-prev text-gray-700 hover:text-black">
              <MdOutlineArrowBackIosNew />
            </div>
            <div className="swiper-button-next text-gray-700 hover:text-black">
              <MdOutlineArrowForwardIos />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
