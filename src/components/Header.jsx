import { Phone, Mail, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enquiry-now`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Enquiry submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setModalOpen(false);
      } else {
        toast.error(data.message || "Failed to submit enquiry.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err); // ✅ Logs error
      toast.error("Failed to submit enquiry. Please try again.");
    }

    setLoading(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center px-4 md:px-8 py-2 text-sm">
        <Search className="text-yellow-400 cursor-pointer" size={20} />
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="text-yellow-400" size={20} />
            <span>+91 907 224 9444</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-yellow-400" size={20} />
            <span>info.megsy@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md flex justify-between items-center px-4 md:px-8 py-4 relative w-full">
        <div className="text-yellow-400 text-2xl font-bold">
          Megsy
          <p className="text-gray-600 text-sm font-medium">
            Foods and Beverages.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-700 font-medium absolute md:relative top-full left-0 w-full bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 md:flex-grow md:justify-end z-50`}
          >
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            className="hidden md:block bg-yellow-400 text-white px-4 py-2 rounded font-medium hover:bg-yellow-500"
            onClick={() => setModalOpen(true)}
          >
            ENQUIRE NOW
          </button>
        </div>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="text-gray-700 text-2xl" size={24} />
          ) : (
            <Menu className="text-gray-700 text-2xl" size={24} />
          )}
        </div>
      </nav>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 md:mx-0 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Enquire Now
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "phone", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "message" ? "textarea" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-2 rounded-md font-medium hover:bg-yellow-500"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
