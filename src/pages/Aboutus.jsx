/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  return (
    <div>
      {/* About Us Hero Section */}
      <section
        className="relative w-full mt-24 md:mt-32 h-72 md:h-96 flex items-center justify-start px-6 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/About Us.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          About Us
        </h1>
      </section>

      {/* About Us Content Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 w-full h-full rounded-lg bg-gray-700"></div>
          <img
            src="/images/healthy_snacking.png"
            alt="Healthy Snacks"
            className="relative w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Redefining Snacking with Innovation
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At Megsy Food & Beverages, we believe that healthy snacking should
            never compromise taste. Using vacuum-frying technology, we craft
            snacks that retain 70% less oil while preserving natural flavor,
            aroma, and texture.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our process ensures that no preservatives, taste enhancers, or
            artificial additives are used, making every bite clean, crisp, and
            nutritious. We maintain optimal oil temperature, preventing
            overheating and ensuring a health-friendly snack.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment extends beyond just manufacturing—we provide
            innovative packaging solutions that guarantee longer shelf stability
            while maintaining the product’s freshness and crunch. Join us in
            making snacking a guilt-free, delicious experience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative w-full h-80 md:h-96 flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Advanced Vacuum-Frying.jpeg",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Join the Revolution in Healthy Snacking
          </h2>
          <Link to="/contact">
            <button className="bg-yellow-400 text-white px-6 py-3 rounded font-medium hover:bg-yellow-500 transition">
              LET'S CONNECT
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
