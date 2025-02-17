import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnergySection = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if the image was already loaded before
    const cached = sessionStorage.getItem("energyImageLoaded");

    if (cached) {
      setImageLoaded(true);
    } else {
      const img = new Image();
      img.src = "/assets/images/reshaping.webp";
      img.onload = () => {
        setImageLoaded(true);
        sessionStorage.setItem("energyImageLoaded", "true"); // Cache the load status
      };
    }
  }, []);

  return (
    <>
      {/* Preload Image */}
      <link rel="preload" href="/assets/images/reshaping.webp" as="image" />

      <section 
        className="flex flex-col lg:flex-row items-center bg-white min-h-screen px-6 md:px-16 pt-24 pb-10 
        md:items-start lg:items-center"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {!imageLoaded ? (
            // Placeholder before the image loads
            <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-lg shadow-md"></div>
          ) : (
            <img
              src="/assets/images/reshaping.webp"
              alt="Solar Panels"
              className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-md transition-opacity duration-700 ease-in-out"
              loading="eager"
              decoding="async"
            />
          )}
        </div>


        {/* Text Section */}
        <div 
          className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-start 
          mt-10 lg:mt-0 text-center lg:text-left"
        >
          <h1 className="text-4xl font-bold text-heading leading-tight">
            Reshaping energy for the future!
          </h1>
          <p className="text-lg text-black font-semibold mt-4">
            The future of energy is clean, sustainable, and efficient. By embracing innovative technologies and renewable solutions, we are transforming the way we power our world.
          </p>

          <div className="lg:block">
            <p className="text-secondary mt-4 leading-relaxed">
              From harnessing the power of the wind to maximizing solar efficiency, we are paving the way for a greener tomorrow. Our solutions reduce carbon emissions, lower energy costs, and promote a healthier planet.
            </p>
            <p className="text-secondary mt-4 leading-relaxed">
              The shift towards renewable energy is not just a choice but a necessity. By integrating smart grids, advanced storage systems, and eco-friendly infrastructure, we ensure a sustainable future for generations to come.
            </p>
            <p className="text-secondary mt-4 leading-relaxed">
              Innovative energy solutions are driving a global transformation, reducing dependence on fossil fuels and embracing cleaner alternatives. By investing in cutting-edge solar, wind, and hydro technologies, we are building a resilient energy ecosystem that supports economic growth while preserving the environment.
            </p>
            <p className="text-secondary mt-4 leading-relaxed">
              As the demand for energy continues to rise, adopting renewable sources is crucial for a sustainable future.
            </p>
          </div>

          <button
            onClick={() => navigate("/form")}
            className="bg-heading text-primary p-2 rounded-4xl mt-10 text-2xl font-semibold cursor-pointer hover:bg-primary hover:text-heading"
          >
            Get My Consultation!
          </button>
        </div>
      </section>
    </>
  );
};

export default EnergySection;
