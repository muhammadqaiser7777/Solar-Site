import React, { useState, useEffect } from "react";


const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [arrowLoaded, setArrowLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowScroll(window.scrollY > 500);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <div
        onClick={scrollTop}
        className="fixed bottom-5 right-5 cursor-pointer z-50"
      >
        {!arrowLoaded && (
          <div className="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>
        )}
        <img
          src="/assets/images/Arrow.png"
          alt="Go to top"
          className={`w-12 h-12 bg-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-bounce ${
            arrowLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setArrowLoaded(true)}
        />
      </div>
    )
  );
};

export default ScrollUp;
