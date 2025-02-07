import React, { memo } from "react";

const stats = [
  { value: "100+", label: "Clients" },
  { value: "89K", label: "Followers on social media" },
  { value: "3", label: "Published books" },
  { value: "8", label: "TED talks" },
  { value: "22", label: "Years of experience" },
  { value: "10+", label: "Workshops" },
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
