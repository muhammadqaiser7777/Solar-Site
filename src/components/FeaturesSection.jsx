import React, { memo } from "react";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";

const featuresData = [
  { image: image3, bgColor: "bg-heading text-primary", reverse: false },
  { image: image4, bgColor: "bg-primary text-heading", reverse: true },
  { image: image5, bgColor: "bg-heading text-primary", reverse: false },
];

const FeaturesSection = () => {
  return (
    <section className="p-4 lg:p-8">
      <div className="container mx-auto space-y-12">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:${
              feature.reverse ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <img src={feature.image} alt="" className="h-80 aspect-video" loading="lazy" />
            <div className={`flex flex-col justify-center flex-1 p-6 ${feature.bgColor}`}>
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">Action</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
