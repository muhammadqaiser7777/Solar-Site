import React, { memo } from "react";

const stats = [
  { value: "1000+", label: "Clients" },
  { value: "10K+", label: "Systems Installed" },
  { value: "100%", label: "Efficiency" },
  { value: "300 MW", label: "Annual Production" },
  { value: "22", label: "Years of experience" },
  { value: "386 kTonnes", label: "CO2 Reduced" },
];

const CompaniesSection = memo(() => {
  return (
    <section className="p-6 bg-heading text-primary">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">{stat.value}</p>
            <p className="text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default CompaniesSection;
