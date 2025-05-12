/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// Importing necessary dependencies
// import { useState } from "react";
import {
  // MapPin,
  // Phone,
  // Mail,
  ShieldX,
  AlertTriangle,
  Cookie,
  UtensilsCrossed,
  Sun,
  Award,
  Scale,
  FlaskConical,
  Lightbulb,
  Factory,
  LineChart,
  ShoppingBag,
} from "lucide-react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import articles from "../data/articles";
import products from "../data/products"; // Importing from the data folder
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  useEffect(() => {
    // Smooth scroll to the section if hash exists
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  // State for form inputs
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  const expertise = [
    {
      title: "Premium Sourcing",
      description:
        "We handpick the finest natural ingredients to ensure purity and quality in every bite.",
      icon: <ShoppingBag size={40} className="text-white" />,
      image: "/images/Premium Sourcing.png",
    },
    {
      title: "Advanced Vacuum-Frying",
      description:
        "Revolutionizing snacking with 70% less oil while maintaining taste, texture, and nutrition.",
      icon: <FlaskConical size={40} className="text-white" />,
      image: "/images/Advanced Vacuum-Frying.jpeg",
    },
    {
      title: "State-of-the-Art Production",
      description:
        "Our cutting-edge facilities ensure hygiene, quality, and consistency in every batch we produce.",
      icon: <Factory size={40} className="text-white" />,
      image: "/images/State-of-the-Art Production.jpeg",
    },
    {
      title: "Consumer Insights",
      description:
        "We stay ahead of market trends, ensuring our snacks meet evolving health-conscious demands.",
      icon: <LineChart size={40} className="text-white" />,
      image: "/images/Consumer Insights.jpeg",
    },
    {
      title: "Innovative Packaging",
      description:
        "Designed for better shelf stability, keeping snacks fresh and crisp without preservatives.",
      icon: <Lightbulb size={40} className="text-white" />,
      image: "/images/Innovative Packaging.png",
    },
  ];

  // const articles = [
  //   {
  //     date: "16 Dec",
  //     title:
  //       "Understanding the Benefits of Vacuum-Fried Snacks for Healthy Living",
  //     image: "/images/healthy_snacking.png",
  //   },
  //   {
  //     date: "16 Dec",
  //     title:
  //       "Why Choosing Natural Ingredients Makes All the Difference in Your Snacks",
  //     image: "/images/Premium Sourcing.png",
  //   },
  //   {
  //     date: "03 Dec",
  //     title: "The Evolution of Healthy Snacking: Trends and Innovations",
  //     image: "/images/Crispy Plant-Based Snacks.png",
  //   },
  // ];

  // Handler for form input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Handler for form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Build the request payload
  //     const payload = {
  //       subject: formData.subject,
  //       text:
  //         `Name: ${formData.name}\n` +
  //         `Email: ${formData.email}\n` +
  //         `Message: ${formData.message}\n`,
  //     };

  //     // Make a POST request to your Node.js server
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_BASE_URL}/send-email`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log("Email sent:", data);

  //     // Show success toast
  //     toast.success("Your message has been sent successfully!", {
  //       duration: 4000, // Display time (optional)
  //     });

  //     // Reset form after submission
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("Error sending email:", error);

  //     // Show error toast
  //     toast.error("Failed to send email. Please try again later.");
  //   }
  // };

  // Custom Next Arrow
  // const NextArrow = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`${className} bg-blue-900 text-white rounded-full p-2`}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  // Custom Previous Arrow
  // const PrevArrow = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`${className} bg-blue-900 text-white rounded-full p-2`}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     />
  //   );
  // };

  // Slider settings for React Slick
  // const sliderSettings = {
  //   dots: true, // Shows navigation dots
  //   infinite: true, // Enables infinite looping
  //   speed: 500, // Transition speed in milliseconds
  //   slidesToShow: 1, // Number of slides to show at once
  //   slidesToScroll: 1, // Number of slides to scroll on navigation
  //   autoplay: true, // Enables autoplay
  //   autoplaySpeed: 3000, // Autoplay speed in milliseconds
  //   arrows: true, // Shows next and previous arrows
  //   pauseOnHover: true, // Pauses autoplay on hover
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   lazyLoad: "ondemand", // Enables lazy loading
  //   fade: true, // Optional: fade transition instead of slide
  //   adaptiveHeight: true, // Adjusts height based on slide content
  // };

  // Updated slides data with organic food-related images
  // const slides = [
  //   {
  //     id: 1,
  //     title: "Welcome to Cotolore",
  //     description:
  //       "Pioneering healthy and organic food solutions for a better tomorrow.",
  //     image:
  //       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Our Mission",
  //     description:
  //       "To provide high-quality organic products that promote health and sustainability.",
  //     image:
  //       "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "Quality Assurance",
  //     description:
  //       "We ensure the best quality through rigorous testing and sustainable sourcing.",
  //     image:
  //       "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   },
  //   {
  //     id: 4,
  //     title: "Join Our Team",
  //     description:
  //       "Be a part of a dynamic team committed to making a positive impact.",
  //     image:
  //       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   },
  // ];

  return (
    <div className="mt-24 font-sans overflow-hidden">
      {/* Home Section with Full-Width Carousel and Overlapping Text */}
      <section className="relative w-full flex items-center justify-center bg-black text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-400 uppercase tracking-wide font-semibold text-sm md:text-base mb-2">
              Welcome to Megsy Food & Beverages
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Healthy Snacking, Redefined
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Experience the goodness of vacuum-fried potato and banana chips
              with 70% less oil than conventional snacks—crispy, flavorful, and
              made without preservatives or taste enhancers.
            </p>
            <Link to="/aboutus">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded font-medium hover:bg-yellow-600 transition">
                Explore
              </button>
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="relative">
            <img
              src="/images/healthy_snacking.png"
              alt="Vacuum Fried Healthy Snacks"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full flex items-center justify-center bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-wide text-sm md:text-base mb-2">
              Innovation in Healthy Snacking
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vacuum-Fried Excellence
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At Megsy Food & Beverages, we partner with our customers to bring
              innovation to snacking. Our vacuum-frying technology ensures 70%
              less oil without compromising taste, texture, or aroma. With no
              preservatives or recycled oil, we create snacks that are crispier,
              healthier, and better for you.
            </p>
            <Link
              to="/solutions"
              className="text-yellow-500 font-semibold hover:underline flex items-center"
            >
              Learn More <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Right Video Placeholder */}
          <div className="relative bg-black w-full h-64 md:h-80 flex items-center justify-center rounded-lg shadow-lg">
            <button className="bg-white text-yellow-500 p-4 rounded-full shadow-lg">
              <Play size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-500 font-semibold uppercase text-sm md:text-base tracking-wide mb-2">
            A Healthy Snacking Initiative by Megsy
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Make Every Bite a Healthier Choice
          </h2>
        </div>

        <div className="relative bg-blue-300 py-12 px-6 md:px-16 rounded-lg flex flex-col md:flex-row items-center md:items-start">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src="/images/healthy_snacks.png"
              alt="Healthy Snacks"
              className="w-80 md:w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left mt-8 md:mt-0 md:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center md:items-start">
                <ShieldX size={36} className="mb-2" />
                <p className="text-2xl font-bold">70% Less Oil</p>
                <p className="text-lg">
                  Our vacuum-frying technology ensures significantly less oil
                  compared to conventional snacks, making every bite a healthier
                  choice.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <AlertTriangle size={36} className="mb-2" />
                <p className="text-2xl font-bold">100% Pure</p>
                <p className="text-lg">
                  No preservatives, no taste enhancers, and no recycled oil—just
                  clean, natural flavors in every crisp.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Cookie size={36} className="mb-2" />
                <p className="text-2xl font-bold">Better Shelf Stability</p>
                <p className="text-lg">
                  Our innovative packaging locks in freshness without
                  compromising crispiness or taste.
                </p>
              </div>
            </div>
            <p className="text-lg mb-6">
              It's time to rethink snacking. Are you ready to switch to a
              healthier, tastier option?
            </p>
            <Link to="/products">
              <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition">
                Explore Our Healthy Snack Collection
              </button>
            </Link>
            <p className="text-xs mt-4">
              *All data is based on our advanced vacuum-frying process and
              strict quality control measures.
            </p>
          </div>
        </div>
      </section>
      
      <section
        id="products-section"
        className="w-full bg-white py-16 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-500 font-semibold uppercase text-sm md:text-base tracking-wide mb-2">
            Healthy Snacking, Redefined
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Vacuum-Fried Delights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex gap-6 items-start">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-md mb-2">
                  {product.description}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  state={{ product }}
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Read More »
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row bg-black text-white py-16 px-6 md:px-16">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/images/Healthy Snacks.png"
            alt="Healthy Snacks"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-8 mt-8 md:mt-0">
          <p className="text-yellow-400 font-semibold uppercase md:text-base tracking-wide mb-2">
            Our Core Values
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Innovating for a Healthier Tomorrow
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            At Megsy Food & Beverages, we are committed to delivering healthier
            and tastier snack alternatives. Our vacuum-frying technology ensures
            70% less oil, with no preservatives or artificial additives, making
            every bite a step toward a healthier future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-5">
              <UtensilsCrossed size={42} className="text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  We Craft Healthier Choices
                </h3>
                <p className="text-gray-300 text-sm">
                  We believe in redefining snacking with natural, oil-conscious,
                  and preservative-free products that maintain taste without
                  compromising health.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Sun size={42} className="text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  We Prioritize Purity
                </h3>
                <p className="text-gray-300 text-sm">
                  Our snacks are free from artificial enhancers, ensuring you
                  enjoy authentic flavors with every crunch.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Award size={42} className="text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  We Commit to Excellence
                </h3>
                <p className="text-gray-300 text-sm">
                  We uphold the highest standards in quality, hygiene, and
                  taste, ensuring that every product reflects our dedication to
                  innovation.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Scale size={42} className="text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  We Uphold Integrity
                </h3>
                <p className="text-gray-300 text-sm">
                  Our commitment to honesty, transparency, and ethical business
                  practices builds trust with our customers and partners alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Expertise Cards */}
          <div className="grid grid-cols-1 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="relative bg-black p-6 rounded-lg overflow-hidden flex items-center text-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex items-center gap-5">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <p className="text-yellow-400 font-semibold uppercase text-sm md:text-base tracking-wide mb-2">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Expertise in Healthy Snacking
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Megsy Food & Beverages, we specialize in innovative, healthy
              snack solutions. Our vacuum-frying technology reduces oil content
              by 70%, preserving natural flavors, colors, and textures—ensuring
              guilt-free indulgence.
            </p>
            <p className="text-md text-gray-700">
              Our expert sourcing team ensures the finest quality ingredients,
              while our advanced manufacturing process maintains hygiene and
              freshness. We are committed to providing consumers with healthier
              snack options that never compromise on taste or quality.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16 px-6 md:px-16 flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-400 font-semibold uppercase text-sm ms:text-base tracking-wide mb-2">
              Private Label Solutions
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Brand, Our Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Megsy Food & Beverages, we bring your healthy snacking vision
              to life. Whether you're a retail chain, packaged food company, or
              startup, we provide custom-formulated, shelf-ready products
              tailored to your brand. Our vacuum-frying technology, premium
              sourcing, and innovative packaging ensure that your brand stands
              apart in the market.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/contact">
              <button className="bg-yellow-400 text-white px-8 py-3 rounded font-medium hover:bg-yellow-500 transition">
                BUILD YOUR BRAND WITH US
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 px-6 md:px-16">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/Advanced Vacuum-Frying.jpeg"
            alt="Advanced Vacuum Frying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
          {/* Black Overlay */}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            Beyond Taste: A Healthier Future
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-black rounded-lg overflow-hidden shadow-lg relative"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full">
                  {article.date}
                </div>
                <h3 className="text-lg font-bold text-white mt-8">
                  {article.title}
                </h3>
                <Link to={`/article/${article.id}`}>
                  <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded font-medium hover:bg-yellow-500 transition w-full">
                    Discover More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
