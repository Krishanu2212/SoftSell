import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: "📤",
      title: "Upload License",
      description: "Submit details of your unused software license in seconds.",
    },
    {
      icon: "📈",
      title: "Get Valuation",
      description: "We evaluate your license and provide a competitive offer.",
    },
    {
      icon: "💸",
      title: "Get Paid",
      description: "Accept the offer and receive your payment securely.",
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
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
