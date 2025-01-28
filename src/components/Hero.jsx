import React from "react";
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
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <img
      src={leftarrow}
      alt="Previous"
      className="w-10 h-10 hover:scale-110 transition-transform"
    />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Next"
  >
    <img
      src={rightarrow}
      alt="Next"
      className="w-10 h-10 hover:scale-110 transition-transform"
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
    <div className="hero-section h-screen relative">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-item w-full h-screen relative">
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

            {/* Text overlay */}
            <div className="absolute md:top-80 md:left-52  top-80 left-0 text-xl bg-[#fe9b29d6] text-secondary md:text-2xl font-bold  bg-opacity-50 p-12 rounded-4xl cursor-pointer hover:bg-primary hover:text-tertiary transition-colors duration-400">
              {item.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
