import React from "react";
import cloth1 from "../../assets/cloth1.webp"
import cloth2 from "../../assets/cloth2.jpeg"
import cloth3 from "../../assets/cloth3.jpeg"
import cloth4 from "../../assets/cloth4.jpeg"

const collections = [
  {
    id: 1,
    title: "Men's Wear",
    image: cloth1,
    link: "/collections/men",
  },
  {
    id: 2,
    title: "Women's Wear",
    image: cloth2,
    link: "/collections/women",
  },
  {
    id: 3,
    title: "Unisex Essentials",
    image: cloth3,
    link: "/collections/unisex",
  },
  {
    id: 4,
    title: "Accessories",
    image: cloth4,
    link: "/collections/accessories",
  },
];

const Collections = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Collections</h2>
        <p className="text-gray-500 mb-10">
          Shop by vibe — curated for every look, every mood.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition">
                <div className="absolute bottom-4 left-4 text-left text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm underline underline-offset-4">Shop Now</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
