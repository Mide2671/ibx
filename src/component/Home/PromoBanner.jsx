import React from "react";
import img from "../../assets/bgimg2.jpg";
import { motion } from "framer-motion";
import { fadeRight, fadeUp } from "../../utils/animation";
const PromoBanner = () => {
  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Block */}
        <div className="text-center md:text-left">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            🔥 Limited Drop: The Essentials
          </motion.h2>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-lg text-gray-300 mb-6 max-w-lg"
          >
            A clean cut, minimalist collection made to elevate your everyday
            style. Available now while stocks last.
          </motion.p>
          <motion.a
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            href="/collections/essentials"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 "
          >
            Shop the Drop
          </motion.a>
        </div>

        {/* Image Block */}
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.7,
          }}
          src={img}
          alt="Essentials Drop"
          className="w-full md:w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
