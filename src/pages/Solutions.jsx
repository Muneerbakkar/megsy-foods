/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const Solutions = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  return (
    <section className="max-w-7xl mt-24 md:mt-32 mx-auto py-16 px-6 md:px-16 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6">
        Our Innovative Solutions
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
        We specialize in vacuum-frying technology, delivering healthier snacking
        alternatives with 70% less oil, no preservatives, and retained natural
        taste. Our expertise ensures crispier, guilt-free indulgence in every
        bite.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="absolute rounded-lg -left-8 -top-8 w-full h-full bg-gray-700"></div>
          <img
            src="/images/Advanced Vacuum-Frying.jpeg"
            alt="Healthy Snack Solutions"
            className="relative w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pioneering Healthier Snacking
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Our vacuum-frying process ensures snacks retain their original
            flavor, color, and texture while being significantly lower in oil.
            With no preservatives or taste enhancers, our products redefine
            healthy indulgence.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether it's crispy banana chips, millet-based snacks, or guilt-free
            potato chips, our expertise in clean-label food innovation ensures
            health-conscious consumers enjoy every bite with confidence.
          </p>
          <p className="text-lg text-gray-700">
            From sourcing premium ingredients to sustainable packaging
            solutions, we are committed to delivering nutritious, shelf-stable
            snacks that align with modern health trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
