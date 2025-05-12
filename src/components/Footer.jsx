import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success(
          data.message ||
            "Subscription successful! The company has been notified."
        );
        setEmail(""); // Clear input field on success
      } else {
        toast.error(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Megsy foods</h2>
          <p className="text-gray-400 mt-4">
            Megsy Food and Beverages, based in Rayamangalam, specializes in
            vacuum-fried potato and banana chips, offering healthier snacks with
            less oil.
          </p>
          <div className="mt-4">
            <div className="flex items-center text-yellow-400">
              <Mail className="mr-2" size={18} /> info.megsy@gmail.com
            </div>
            <div className="flex items-center text-yellow-400 mt-2">
              <Phone className="mr-2" size={18} /> +91 907 224 9444
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-yellow-400">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-400">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          {/* Newsletter Subscription */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Subscribe to our Newsletter
            </h3>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md border-none text-black focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 px-4 py-2 rounded-r-md font-medium text-black hover:bg-yellow-500 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>Copyright © 2025 Megsy. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Facebook className="text-yellow-400 cursor-pointer" size={20} />
          <Twitter className="text-yellow-400 cursor-pointer" size={20} />
          <Linkedin className="text-yellow-400 cursor-pointer" size={20} />
          <Instagram className="text-yellow-400 cursor-pointer" size={20} />
          <Youtube className="text-yellow-400 cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
}
