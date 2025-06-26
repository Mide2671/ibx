import React, { useState } from "react";
import img1 from "../assets/cloth1.webp";
import img2 from "../assets/cloth2.jpeg";
import img3 from "../assets/cloth3.jpeg";
import img4 from "../assets/cloth4.jpeg";
import { motion } from "framer-motion";
import { FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";
const allProducts = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: "₦15,000",
    image: img1,
    badge: "New",
    category: "Tops",
  },
  {
    id: 2,
    name: "Relaxed Fit Trousers",
    price: "₦12,500",
    image: img2,
    badge: "Sale",
    category: "Trousers",
  },
  {
    id: 3,
    name: "Graphic Tee",
    price: "₦8,000",
    image: img3,
    badge: "New",
    category: "Tops",
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: "₦18,000",
    image: img4,
    badge: "New",
    category: "Tops",
  },
  // Add more products here...
];

const categories = ["All", "Tops", "Trousers", "Jackets"];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low"];

const Shop = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Default");

  const filtered = allProducts.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "Price: Low to High") return a.price - b.price;
    if (sortOrder === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  const displayed = sorted.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Shop All Products
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "bg-white text-black border-gray-300"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            className="border px-3 py-2 rounded text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayed.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-100 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                </Link>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-orange-500 font-bold mt-2">
                  ₦{product.price.toLocaleString()}
                </p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < sorted.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
