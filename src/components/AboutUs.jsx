import React from "react";
import aboutUsImage from "../assets/images/About-us.jpg"; 

const AboutUs = () => {
  return (
    <div className="text-tertiary bg-primary pb-10 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-6xl mb-4 hover-animation cursor-pointer">About Us</h2>
          <p className="text-lg text-heading ">
            Empowering communities with clean, reliable solar energy solutions.
          </p>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Image on the left */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src={aboutUsImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* Text Content on the Right */}
          <div className="lg:w-1/2 w-full">
            <p className="leading-relaxed mb-6">
              At <span className="font-semibold text-heading">Solar Tech</span>,
              we believe that clean, reliable energy and storage solutions should
              be accessible to everyone. Our mission is to reshape the connection
              between solar energy system providers and individuals seeking to
              embrace the power of solar energy.
            </p>
            <p className="leading-relaxed mb-6">
              As the demand for sustainable energy solutions grows, solar energy
              has become essential for reducing costs and ensuring energy
              independence. It is a key driver in addressing energy challenges and
              building a cleaner, greener future.
            </p>
            <p className="leading-relaxed mb-6">
              <span className="font-semibold text-heading">Solar Tech</span>{" "}
              serves as a leading platform connecting consumers with expert solar
              installers across the United States. Founded with the vision of
              revolutionizing the solar energy industry, we make the process of
              acquiring solar systems simple and seamless by pairing customers
              with a network of skilled, quality-assured local installers using
              innovative technology.
            </p>
            <p className="leading-relaxed">
              Our vision at{" "}
              <span className="font-semibold text-heading">Solar Tech</span> is
              a future where every home and business can achieve energy
              independence through solar power. We are dedicated to making solar
              energy affordable, accessible, and convenient, helping individuals
              and communities take a step toward sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
