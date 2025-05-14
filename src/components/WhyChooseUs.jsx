import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    {
      icon: "⚡",
      title: "Instant Valuation",
      description: "Get fast quotes with our automated pricing engine.",
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "We use industry-standard encryption for all payments.",
    },
    {
      icon: "💼",
      title: "Business Trusted",
      description: "Used by over 100+ businesses to resell unused licenses.",
    },
    {
      icon: "📞",
      title: "Support On Demand",
      description: "Need help? Our support team is just a click away.",
    },
  ];

  return (
    <motion.section
      className="py-24 px-4 bg-gray-50 dark:bg-gray-800 text-center text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{point.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
