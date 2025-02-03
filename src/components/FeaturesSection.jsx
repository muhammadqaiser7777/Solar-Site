import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";

const featureData = [
  {
    img: image3,
    bgColor: "bg-primary",
    textColor: "text-heading",
    buttonHover: "hover:bg-heading hover:text-primary",
    quote: "Harness the power of the sun and take control of your energy future.",
  },
  {
    img: image4,
    bgColor: "bg-heading",
    textColor: "text-primary",
    buttonHover: "hover:bg-primary hover:text-heading",
    quote: "Solar energy: The investment that pays for itself and the planet.",
  },
  {
    img: image5,
    bgColor: "bg-primary",
    textColor: "text-heading",
    buttonHover: "hover:bg-heading hover:text-primary",
    quote: "Go solar today and shine brighter for generations to come.",
  },
];

const FeaturesSection = memo(() => {
  
  return (
    <section className="p-4 lg:p-8">
      <div className="container mx-auto space-y-10">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
});

const FeatureCard = memo(({ feature, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <img src={feature.img} alt="Solar Tech" className="h-80 aspect-video" loading="lazy" />
      <div className={`flex flex-col justify-center flex-1 p-6 ${feature.bgColor} ${feature.textColor}`}>
        <span className="text-xs uppercase">Join, it's free</span>
        <h3 className="text-3xl font-bold">{feature.quote}</h3>
        <p className="my-6">
          Switch to solar energy and enjoy clean, cost-effective, and sustainable power for your home or business.
        </p>
        <button
          onClick={() => navigate("/form")}
          type="button"
          className={`self-start p-3 px-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${feature.buttonHover}`}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
});

export default FeaturesSection;
