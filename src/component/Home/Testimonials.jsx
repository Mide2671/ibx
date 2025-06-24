import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Temi A.",
    quote: "IBX makes me feel confident every time I step out. The fit is 🔥.",
  },
  {
    id: 2,
    name: "Chuka M.",
    quote: "Quick delivery, great quality — what more can you ask for?",
  },
  {
    id: 3,
    name: "Zainab A.",
    quote: "IBX clothes are always on point. Minimal, bold, perfect.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-500 mb-10">Real feedback from real IBX fam 👇</p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <p className="text-lg text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-orange-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
