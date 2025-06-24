import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { navData } from "../../data/Navbar";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div 
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.3}}
        className="p-2 md:hidden absolute top-13  left-0 z-20 w-full bg-slate-900 ">
          <div className="p-2">
          <ul className="flex flex-col items-center gap-7 mt-4 pt-3 border-t ">
            {navData.map((list) => (
              <li
                key={list.id}
                className="hover:text-orange-500 text-sm  duration-300 "
              >
                <a href={list.link}>{list.title}</a>
              </li>
            ))}
            <button className="bg-orange-500 text-white rounded-full hover:bg-transparent hover:border hover:border-orange-500 px-5">
              Login
            </button>
          </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
