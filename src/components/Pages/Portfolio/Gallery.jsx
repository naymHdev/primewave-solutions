/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import { imageGallery } from "@/data/galleryData";

const Gallery = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SectionName
        name="Gallery"
        title="Our Portfolio in Motion"
        details="See our work in action through an interactive gallery of websites, apps, and digital experiences. Explore how each project was crafted with care to deliver stunning results."
      />
      <div>
        <ResponsiveContainer>
          <div className="slider-container">
            <Slider {...settings}>
              {imageGallery?.map((img) => (
                <div key={img.id}>
                  <div className="relative h-full ">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={img.image}
                      alt={img.id}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Gallery;
