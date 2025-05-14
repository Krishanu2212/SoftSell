import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.company) newErrors.company = "Required";
    if (!formData.licenseType) newErrors.licenseType = "Required";
    if (!formData.message) newErrors.message = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Message submitted! (Simulated)");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <motion.section
      className="py-24 px-4 bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg text-gray-800 dark:text-gray-100">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Inputs (Name, Email, Company, License Type) */}
            {["name", "email", "company"].map((field) => (
              <div key={field}>
                <label className="block font-medium capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label className="block font-medium">License Type</label>
              <select
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select</option>
                <option value="Antivirus">Antivirus</option>
                <option value="Office Suite">Office Suite</option>
                <option value="Dev Tools">Dev Tools</option>
                <option value="Other">Other</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
            </div>
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
