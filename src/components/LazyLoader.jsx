import React, { useState, useEffect, lazy, Suspense } from "react";

const LazyFeaturesSection = lazy(() => import("./FeaturesSection"));

const LazyLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = React.useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect(); // Stop observing after first load
        }
      },
      { threshold: 0.2 }
    );

    const target = document.getElementById("features");
    if (target) observerRef.current.observe(target);

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div id="features" className="pt-10">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
          </div>
        }
      >
        {isVisible && <LazyFeaturesSection />}
      </Suspense>
    </div>
  );
};

export default LazyLoader;
