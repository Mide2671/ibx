import React from "react";
import img from "../../assets/bgimg2.jpg";
const PromoBanner = () => {
  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Block */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            🔥 Limited Drop: The Essentials
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-lg">
            A clean cut, minimalist collection made to elevate your everyday
            style. Available now while stocks last.
          </p>
          <a
            href="/collections/essentials"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Shop the Drop
          </a>
        </div>

        {/* Image Block */}
        <img
          src={img}
          alt="Essentials Drop"
          className="w-full md:w-[400px] h-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>
      
    </section>
  );
};

export default PromoBanner;
