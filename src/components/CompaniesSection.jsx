import React, { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1000, suffix: "+", label: "Clients" },
  { value: 10000, suffix: "+", label: "Systems Installed" },
  { value: 100, suffix: "%", label: "Efficiency" },
  { value: 300, suffix: " MW", label: "Annual Production" },
  { value: 22, suffix: "", label: "Years of Experience" },
  { value: 386, suffix: " KT", label: "CO2 Reduced" },
];

const AnimatedNumber = ({ targetValue, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = Math.floor(targetValue * 0.6); // Start from 60% of final value
      setCount(start);

      const increment = Math.ceil(targetValue / 100); // Smaller increments for smoother animation
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return prev + increment;
        });
      }, 30); // Faster animation

      return () => clearInterval(interval);
    }
  }, [inView, targetValue]);

  return (
    <span ref={ref} className="animate-fade-in">
      {count}{suffix}
    </span>
  );
};

const CompaniesSection = memo(() => {
  return (
    <section className="p-6 bg-heading text-primary">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <AnimatedNumber targetValue={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default CompaniesSection;
