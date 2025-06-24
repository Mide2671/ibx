import React from "react";
import bgImage from "../../assets//bgimg1.jpg";
import { motion } from "framer-motion";
import { fadeRight } from "../../utils/animation";
const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Fashion Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-2xl">
          <motion.h1
            variants={fadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Redefine <span className="text-orange-500">Style</span>, Embrace{" "}
            <span className="text-orange-500">Confidence</span>
          </motion.h1>
          <motion.p
            variants={fadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-200 mb-6"
          >
            Step into a world where fashion isn’t just worn — it’s owned.
            Discover premium wear for bold souls and timeless looks.
          </motion.p>
          <motion.button
            variants={fadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 "
          >
            Shop the Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
