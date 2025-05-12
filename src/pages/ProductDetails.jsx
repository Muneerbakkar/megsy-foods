import { useParams, Link } from "react-router-dom";
import products from "../data/products"; // Import products data
import { useEffect } from "react";

const ProductDetails = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <p className="text-center text-gray-700 mt-10">Product not found!</p>
    );

  return (
    <section className="w-full mt-24 md:mt-34 bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-700 text-lg mt-4">{product.fullDescription}</p>
        <div className="mt-6">
          <Link
            to="/#products-section"
            className="text-yellow-500 font-medium hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
