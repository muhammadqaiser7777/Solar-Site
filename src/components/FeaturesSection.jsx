import React, { memo } from "react";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";

const FeaturesSection = () => {
  return (
    <div>
      <section className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={image3}
              alt=""
              className="h-80 aspect-video"
              loading="lazy"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-heading text-primary">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start cursor-pointer">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={image4}
              alt=""
              className="h-80 aspect-video"
              loading="lazy"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-primary text-heading">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={image5}
              alt=""
              className="h-80 aspect-video"
              loading="lazy"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-heading text-primary">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
