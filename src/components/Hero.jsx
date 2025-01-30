import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/image1.jpg";
import solar1 from "../assets/videos/solar1.mp4";
import image2 from "../assets/images/image2.jpg";
import solar2 from "../assets/videos/solar2.mp4";
import leftarrow from "../assets/images/left-arrow.png";
import rightarrow from "../assets/images/right-arrow.png";

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <img
      src={leftarrow}
      alt="Previous"
      className="w-6 h-6 sm:w-10 sm:h-10 hover:scale-110 transition-transform"
    />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <img
      src={rightarrow}
      alt="Next"
      className="w-6 h-6 sm:w-10 sm:h-10 hover:scale-110 transition-transform"
    />
  </button>
);

const Hero = () => {
  const sliderItems = [
    {
      type: "image",
      src: image1,
      alt: "Image 1",
      text: "Install solar panels and reduce your energy bills. Get a quote today!",
    },
    {
      type: "video",
      src: solar1,
      alt: "Video 1",
      text: "Custom solar solutions tailored to your needs. Request a free quote!",
    },
    {
      type: "image",
      src: image2,
      alt: "Image 2",
      text: "Keep your solar system running with expert maintenance. Get a quote!",
    },
    {
      type: "video",
      src: solar2,
      alt: "Video 2",
      text: "Store excess solar energy for later use. Request a free quote now!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    arrows: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
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
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}

            {/* Text overlay and Get Quote button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-base sm:text-xl md:text-2xl font-bold text-secondary bg-opacity-50 p-2 sm:p-4 md:p-8  cursor-pointer ">
              <p className="mb-2 sm:mb-4 bg-[#fe9b29d6] px-4 sm:px-6 py-6 sm:py-10 rounded-4xl">
                {item.text}
              </p>
              <ScrollLink
                to="form"
                smooth={true}
                duration={500}
                className="mt-2 sm:mt-4 px-10 sm:px-20 py-2 sm:py-3 bg-primary text-tertiary font-semibold text-sm sm:text-lg rounded-4xl shadow-lg hover:bg-heading hover:text-primary transition-ease-in-out duration-400 cursor-pointer"
              >
                Get Quote
              </ScrollLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
