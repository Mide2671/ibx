import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the IBX Club
        </h2>
        <p className="text-gray-600 mb-6">
          Get 10% off your first order. Be the first to know about new drops,
          exclusive promos & more.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
