import React from "react";

const services = [
  {
    title: "GOVERNMENT",
    description:
      "Empowering cities with sustainable solar energy solutions. Our efficient solar grids reduce costs and carbon footprint, making clean energy accessible for public services and infrastructure.",
    bg: "bg-heading",
  },
  {
    title: "RESIDENTIAL",
    description:
      "Harness the power of the sun for your home. Our advanced solar panels provide clean, renewable energy, reducing electricity bills and increasing energy independence.",
    bg: "bg-primary",
  },
  {
    title: "COMMERCIAL",
    description:
      "Helping businesses transition to cost-effective solar energy. Our tailored solar solutions optimize energy efficiency, reduce operational costs, and support sustainable business practices.",
    bg: "bg-heading",
  },
];

const ServiceTypes = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">We Provide Energy</h2>
        <p className="text-gray-500 mt-2">
          To many clients like government, homes, and offices.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto 
                transition-shadow duration-300 hover:shadow-[0_4px_15px_#fe9929]"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-lg p-6 text-center"
          >
            {/* Title & Description */}
            <h3 className="text-lg font-bold text-gray-900 mt-8">
              {service.title}
            </h3>
            <div className="w-10 h-1 bg-green-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
