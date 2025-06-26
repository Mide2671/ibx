import React from "react";
import { FaShippingFast, FaUndoAlt, FaLock, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../utils/animation";

const features = [
  {
    id: 1,
    icon: <FaShippingFast size={28} />,
    title: "Free Shipping",
    desc: "On orders above ₦50,000",
  },
  {
    id: 2,
    icon: <FaUndoAlt size={28} />,
    title: "Easy Returns",
    desc: "Hassle-free returns within 7 days",
  },
  {
    id: 3,
    icon: <FaLock size={28} />,
    title: "Secure Checkout",
    desc: "All payments are SSL encrypted",
  },
  {
    id: 4,
    icon: <FaStar size={28} />,
    title: "Premium Quality",
    desc: "Locally made. Globally inspired.",
  },
];

const WhyShop = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Why Shop With IBX?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item) => (
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md "
            >
              <div className="text-orange-500 mb-3 flex  justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShop;
