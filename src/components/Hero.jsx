import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderItems = [
  {
    type: "video",
    src: "/assets/videos/solar1.mp4",
    poster: "/assets/images/video-placeholder.webp", // Preview before video loads
    alt: "Video 1",
    text: "Custom solar solutions tailored to your needs. Request a free quote!",
  },
  {
    type: "image",
    src: "/assets/images/image2.webp",
    // placeholder: "/assets/images/placeholder.webp", // Low-quality preview
    alt: "Image 2",
    text: "Keep your solar system running with expert maintenance. Get a quote!",
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`absolute ${direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"} 
      top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
    onClick={onClick}
    aria-label={direction === "left" ? "Previous Slide" : "Next Slide"}
  >
    {direction === "left" ? (
      <FiChevronLeft className="w-8 h-8 sm:w-12 sm:h-12 text-black hover:scale-110 transition-transform" />
    ) : (
      <FiChevronRight className="w-8 h-8 sm:w-12 sm:h-12 text-black hover:scale-110 transition-transform" />
    )}
  </button>
);

const Hero = () => {
  const navigate = useNavigate();
  const [loadedItems, setLoadedItems] = useState({});

  useEffect(() => {
    sliderItems.forEach((item) => {
      if (item.type === "image") {
        const img = new Image();
        img.src = item.src;
        img.onload = () => {
          setLoadedItems((prev) => ({ ...prev, [item.src]: true }));
        };
      }
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    pauseOnHover: false,
  };

  return (
    <div className="hero-section h-screen sm:h-[80vh] relative bg-gray-900">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-item w-full h-screen sm:h-[90vh] relative">
            {item.type === "image" ? (
              <img
                src={loadedItems[item.src] ? item.src : item.placeholder}
                alt={item.alt}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                poster={item.poster}
                preload="metadata"
              />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-base sm:text-xl md:text-2xl font-bold text-secondary bg-opacity-50 p-2 sm:p-4 md:p-8">
              <p className="mb-2 sm:mb-4 bg-[#fe9b29d6] px-4 sm:px-6 py-6 sm:py-10 rounded-4xl">
                {item.text}
              </p>
              <button
                onClick={() => navigate("/form")}
                className="mt-2 sm:mt-4 px-10 sm:px-20 py-2 sm:py-3 bg-primary text-tertiary font-semibold text-sm sm:text-lg rounded-4xl shadow-lg hover:bg-heading hover:text-primary transition-ease-in-out duration-400 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
