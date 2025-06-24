import React from "react";
import Hero from "../component/Home/Hero";
import NewArrivals from "../component/Home/NewArrivals";
import Collections from "../component/Home/Collections";
import WhyShop from "../component/Home/WhyShop";
import PromoBanner from "../component/Home/PromoBanner";
import Testimonials from "../component/Home/Testimonials";
import Newsletter from "../component/Home/Newsletter";
import Footer from "../component/Home/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <NewArrivals />
      <Collections />
      <WhyShop />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
