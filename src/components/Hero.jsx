import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Use public assets instead of importing them directly
const sliderItems = [
  {
    type: "image",
    src: "/assets/images/image1.webp",
    alt: "Image 1",
    text: "Install solar panels and reduce your energy bills. Get a quote today!",
  },
  {
    type: "video",
    src: "/assets/videos/solar1.mp4",
    alt: "Video 1",
    text: "Custom solar solutions tailored to your needs. Request a free quote!",
  },
  {
    type: "image",
    src: "/assets/images/image2.webp",
    alt: "Image 2",
    text: "Keep your solar system running with expert maintenance. Get a quote!",
  },
  {
    type: "video",
    src: "/assets/videos/solar2.mp4",
    alt: "Video 2",
    text: "Store excess solar energy for later use. Request a free quote now!",
  },
];

// Custom arrow components
const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`absolute ${direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"} 
      top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
    onClick={onClick}
    aria-label={direction === "left" ? "Previous Slide" : "Next Slide"}
  >
    <img
      src={`/assets/images/${direction}-arrow.png`}
      alt={direction === "left" ? "Previous" : "Next"}
      className="w-6 h-6 sm:w-10 sm:h-10 hover:scale-110 transition-transform"
      loading="lazy"
      decoding="async"
    />
  </button>
);

const Hero = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    pauseOnHover: false,
  };

  return (
    <div className="hero-section h-screen sm:h-[80vh] relative">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-item w-full h-screen sm:h-[90vh] relative">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                preload="none"
              />
            )}

            {/* Text overlay and Get Quote button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-base sm:text-xl md:text-2xl font-bold text-secondary bg-opacity-50 p-2 sm:p-4 md:p-8 cursor-pointer">
              <p className="mb-2 sm:mb-4 bg-[#fe9b29d6] px-4 sm:px-6 py-6 sm:py-10 rounded-4xl">
                {item.text}
              </p>
              <button
                onClick={() => navigate("/form")}
                className="mt-2 sm:mt-4 px-10 sm:px-20 py-2 sm:py-3 bg-primary text-tertiary font-semibold text-sm sm:text-lg rounded-4xl shadow-lg hover:bg-heading hover:text-primary transition-ease-in-out duration-400 cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
