import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const products = [
    {
      title: "Vacuum-Fried Banana Chips",
      description:
        "Our vacuum-fried banana chips are light, crispy, and made with minimal oil, retaining natural flavors while offering a guilt-free snacking experience.",
      image: "/images/banana_chips.png",
      reverse: false, // Image Left, Text Right on large screens
    },
    {
      title: "Guilt-Free Potato Chips",
      description:
        "Enjoy the crunch of our vacuum-fried potato chips with 70% less oil. A perfect balance of taste and health, without added preservatives.",
      image: "/images/Guilt-Free Sweet Potato Chips.png",
      reverse: true, // Image Right, Text Left on large screens
    },
  ];

  return (
    <section className="max-w-7xl mt-24 md:mt-32 mx-auto py-16 px-6 md:px-16 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6">Our Healthy Snack Range</h2>
      <p className="text-lg font-semibold text-center mb-6">
        Nutritious, flavorful, and innovative snacking options.
      </p>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Crafted with vacuum-frying technology to preserve taste and texture while 
        reducing oil content by 70%. No preservatives, just pure goodness in every bite!
      </p>

      {/* Products Section */}
      <div className="space-y-20">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              product.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center px-6 md:px-12">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Text - Aligned Left for Small Screens */}
            <div className="w-full md:w-1/2 px-6 md:px-12 text-left">
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
