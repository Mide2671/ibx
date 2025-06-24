// import React from "react";

// const NewArrivals = () => {
//   const product = [
//     {
//       id: 1,
//       name: "Oversized Hoodie",
//       price: "₦15,000",
//       image: "/products/hoodie.jpg",
//     },
//     {
//       id: 2,
//       name: "Relaxed Fit Tee",
//       price: "₦7,000",
//       image: "/products/tshirt.jpg",
//     },
//     {
//       id: 3,
//       name: "Denim Jacket",
//       price: "₦18,500",
//       image: "/products/jacket.jpg",
//     },
//     {
//       id: 4,
//       name: "Cargo Pants",
//       price: "₦14,000",
//       image: "/products/pants.jpg",
//     },
//   ];
//   return (
//     <section className="m-10">
//       <div className="container mx-auto">
//         <div>
//           <h1 className="font-bold text-3xl text-orange-700">New Arrivals</h1>
//           <p className="text-lg tracking-wide">
//             Discover the latest drops fresh off the press.
//           </p>
//         </div>
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
//           {product.map((data) => (
//             <div className="w-[200px] h-[200px] bg-gray-700">
//               <h1>{data.name}</h1>
//               <p>{data.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;
import React from "react";
import cloth1 from "../../assets/cloth1.webp"
import cloth2 from "../../assets/cloth2.jpeg"
import cloth3 from "../../assets/cloth3.jpeg"
import cloth4 from "../../assets/cloth4.jpeg"
const products = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: "₦15,000",
    image: cloth1,
  },
  {
    id: 2,
    name: "Relaxed Fit Tee",
    price: "₦7,000",
    image: cloth2,
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₦18,500",
    image: cloth3,
  },
  {
    id: 4,
    name: "Cargo Pants",
    price: "₦14,000",
    image: cloth4,
  },
];

const NewArrivals = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
          New Arrivals
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Discover the latest drops fresh off the press.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible no-scrollbar">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-orange-500 font-semibold">{item.price}</p>
                <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
