import React, { useState, useEffect } from "react";

const LazyFeaturesSection = React.lazy(() =>
  import("../components/FeaturesSection")
);

const LazyLoader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#features");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="features" className="pt-10">
      {isVisible ? (
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>
          }
        >
          <LazyFeaturesSection />
        </React.Suspense>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p>Loading features...</p>
        </div>
      )}
    </div>
  );
};

export default LazyLoader;
