import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

import { navData } from "../../data/Navbar";
import ResponsiveMenu from "./ResponsiveMenu";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeDown } from "../../utils/animation";
function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  return (
    <nav>
      {/* Fixed Navbar Container */}
      <div className="bg-slate-900 text-white p-3 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold tracking-wider bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
            IBX
          </h1>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex gap-6">
              {navData.map((e) => (
                <motion.li
                  variants={fadeDown(0.3)}
                  initial="hidden"
                  animate="visible"
                  key={e.id}
                  className={`inline-block font-semibold ${
                    location == e.link
                      ? `underline underline-offset-4 text-orange-500`
                      : ``
                  }`}
                >
                  <a href={e.link}>{e.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Icons & Login */}
          <div className="flex items-center gap-2">
            {/* <span className="hover:bg-orange-500 rounded-full p-1 duration-300">
              <BiSearch size={24} />
            </span> */}
            <span className="hover:bg-orange-500 rounded-full p-1 duration-300">
              <PiShoppingBagOpenThin size={24} />
            </span>
            <button
              type="button"
              className="hidden md:block text-orange-500 border border-orange-500 px-3 py-1 rounded-sm hover:bg-orange-500 hover:text-white duration-300"
            >
              Login
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="duration-300"
                onClick={() => setOpen(!open)}
              >
                {open ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Menu */}
        <ResponsiveMenu open={open} />
      </div>
    </nav>
  );
}

export default Navbar;
