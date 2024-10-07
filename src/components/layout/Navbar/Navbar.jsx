"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-4xl font-extrabold">
          <span className=" text-black">PrimeWave</span>
        </div>

        {/* Contact Us Button */}
        <div className="block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="">
          <button onClick={handleMenuToggle}>
            <CiMenuFries className="h-8 w-8 text-pink-500" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col items-center py-4">
            <a href="#contact" className="py-2 text-pink-500">
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
