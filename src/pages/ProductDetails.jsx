import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img2 from "../assets/cloth2.jpeg";
import img3 from "../assets/cloth3.jpeg";
const mockProducts = [
  {
    id: "1",
    name: "Oversized Hoodie",
    price: 15000,
    category: "Tops",
    image: img2,
    description: "Soft, heavy-weight hoodie made from 100% cotton. Oversized fit with ribbed cuffs.",
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
  },
  {
    id: "2",
    name: "Relaxed Trousers",
    price: 12500,
    category: "Trousers",
    image: img3,
    description: "Comfort-fit trousers with elastic waistband and urban-style ankle taper.",
    sizes: ["28", "30", "32", "34"],
    badge: "Sale",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <motion.section
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />

        <div>
          {product.badge && (
            <span className="inline-block bg-orange-500 text-white px-3 py-1 text-xs rounded mb-3">
              {product.badge}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
            {product.name}
          </h1>
          <p className="text-orange-500 text-2xl font-semibold mb-4">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Select Size:</label>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded hover:bg-black hover:text-white text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Placeholder */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
