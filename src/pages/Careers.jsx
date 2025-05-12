import { useEffect } from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  return (
    <section className="max-w-7xl mt-24 md:mt-32 mx-auto py-16 px-6 md:px-16 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6">Careers</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Us in Shaping the Future of Healthy Snacking
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            At Megsy Food & Beverages, we are on a mission to create healthier,
            innovative snacking solutions that redefine taste and nutrition. We
            seek passionate individuals who are driven by innovation, quality,
            and excellence.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We value teamwork, creativity, and problem-solving. Whether you have
            expertise in food technology, research and development, marketing,
            or operations, you will be part of a dynamic team that is committed
            to delivering exceptional products to health-conscious consumers.
          </p>
          <p className="text-lg text-gray-700">
            If you are excited to work in an environment that prioritizes
            innovation, quality, and sustainability, we would love to hear from
            you. Share your profile, and let’s explore how you can contribute to
            our growing team.
          </p>
          <Link to="/openings">
            <button className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded font-medium hover:bg-yellow-500 transition">
              APPLY NOW
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src="/images/Career.jpeg"
            alt="Career Opportunities"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;
