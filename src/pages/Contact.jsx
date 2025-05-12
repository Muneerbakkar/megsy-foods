import { useEffect, useState } from "react";
import { Mail, Building, Headset } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: formData.subject,
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          }),
        }
      );

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending email. Please try again later.");
      }
    } catch {
      toast.error("Error sending email. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <>
      <section
        className="relative w-full mt-24 md:mt-32 h-72 md:h-96 flex items-center justify-start px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Contact Us.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <Mail size={40} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info.megsy@gmail.com</p>
          </div>
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <Building size={40} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">
              MEGSY FOOD AND BEVERAGES PRIVATE LIMITED
              <br />
              XVII/2, MINI INDUSTRIAL ESTATE, RAYAMANGALAM (PO)
              <br />
              ERNAKULAM - 683545,KERALA, INDIA
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <Headset size={40} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">0484-2658541</p>
            <p className="text-gray-600">+91 907 224 9444</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <div className="max-w-7xl mx-auto w-full h-96">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8020076713597!2d76.51601707479483!3d10.08562009002421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e31278b01313%3A0x80a03544ed91e1a3!2sMEGSY%20FOODS%20AND%20BEVERAGES%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1738661531802!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
