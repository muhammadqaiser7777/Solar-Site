import React from "react";
import { FaBuilding, FaHome, FaCity } from "react-icons/fa"; // Icons for services

const services = [
  {
    title: "GOVERNMENT",
    description:
      "Empowering cities with sustainable solar energy solutions. Our efficient solar grids reduce costs and carbon footprint, making clean energy accessible for public services and infrastructure.",
    bg: "bg-heading",
    icon: <FaCity className="text-4xl text-primary" />,
  },
  {
    title: "RESIDENTIAL",
    description:
      "Harness the power of the sun for your home. Our advanced solar panels provide clean, renewable energy, reducing electricity bills and increasing energy independence.",
    bg: "bg-primary",
    icon: <FaHome className="text-4xl text-heading" />,
  },
  {
    title: "COMMERCIAL",
    description:
      "Helping businesses transition to cost-effective solar energy. Our tailored solar solutions optimize energy efficiency, reduce operational costs, and support sustainable business practices.",
    bg: "bg-heading",
    icon: <FaBuilding className="text-4xl text-primary" />,
  },
];

const ServiceTypes = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">We Provide Energy</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Powering governments, homes, and businesses with sustainable solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg border border-gray-200 
              rounded-xl p-8 text-center transition-transform transform duration-300 
              hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
          >
            {/* Service Icon */}
            <div className="flex justify-center items-center mb-6">{service.icon}</div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <div className="w-10 h-1 bg-primary mx-auto mt-3"></div>
            <p className="text-gray-600 mt-4">{service.description}</p>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fe9929] opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
