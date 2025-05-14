import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "IT Manager",
      company: "TechNova Pvt Ltd",
      review:
        "SoftSell made the license resale process incredibly easy. Got our valuation within hours!",
    },
    {
      name: "Rahul Mehta",
      role: "Founder",
      company: "SaaS Vault",
      review:
        "Professional, responsive, and quick payouts. Highly recommend SoftSell to any company.",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow text-left max-w-md mx-auto"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{t.review}”</p>
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">
                {t.role}, {t.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
