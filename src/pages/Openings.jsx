import { useEffect } from "react";

const Openings = () => {
  // Example: Empty array to simulate "no open positions"
  const jobOpenings = [];

  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  return (
    <div className="mt-24 md:mt-32 font-sans text-black">
      {/* Hero Section */}
      <section
        className="relative w-full md:mt-32 h-72 md:h-96 flex items-center justify-start px-6 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/join_our_team.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Join Our Team
        </h1>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
          Why Work With Us?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          At Megsy, we believe in fostering innovation, collaboration, and
          personal growth. Become a part of our mission to revolutionize the
          organic food industry while building a rewarding career.
        </p>
      </section>

      {/* Job Openings Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">
          Current Openings
        </h3>

        {/* Check if we have job openings */}
        {jobOpenings.length === 0 ? (
          <div className="text-left text-gray-600 text-xl">
            <p>Currently, there are no open positions.</p>
            <p>Please check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col"
              >
                <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {job.location}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {job.description}
                </p>
                <a
                  href={job.applyLink}
                  className="mt-auto inline-block bg-black text-white px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section (Optional) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
          Stay Tuned
        </h3>
        <p className="text-lg md:text-xl mb-6">
          We’re always looking for talented individuals. Keep an eye on this
          page for future updates!
        </p>
      </section>
    </div>
  );
};

export default Openings;
