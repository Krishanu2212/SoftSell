import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-24 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Sell Unused Licenses with Confidence
        </h1>
        <p className="text-xl mb-10 leading-relaxed text-gray-600 dark:text-gray-300">
          Fast valuations, secure transactions, and real payouts — all in one place.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg"
        >
          Get a Quote
        </motion.button>
      </div>
    </motion.section>
  );
}
