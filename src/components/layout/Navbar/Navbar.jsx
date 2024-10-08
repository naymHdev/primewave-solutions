"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <div className="text-4xl font-extrabold">
          <span className=" text-black">PrimeWave</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="">
          <button onClick={handleMenuToggle}>
            <CiMenuFries className="h-8 w-8 text-[#10355D]" />
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full md:w-[30%] w-full bg-[#10355D] text-white shadow-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={handleMenuToggle}>
            <AiOutlineClose className="h-8 w-8 font-bold hover:text-[#104F89]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-end space-y-3 px-10">
          <a
            href="#home"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
          >
            About
          </a>
          <a
            href="#services"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
          >
            Contact Us
          </a>
        </div>

        {/* Social media links with icons */}
        <div className="flex items-center justify-end space-x-5 px-10 mt-6">
          <a
            className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-[#1267b6]"
            href="https://web.facebook.com/naymHdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-[#1267b6]"
            href="https://www.linkedin.com/in/naymhdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-[#1267b6]"
            href="https://www.linkedin.com/in/naymhdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-[#1267b6]"
            href="https://wa.me/8801770064053"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
        <div className="mt-10 text-end px-10">
          <h2 className="text-5xl font-extrabold">PrimeWave</h2>
          <div className="border border-[#1268B6] my-4" />
          <p className=" font-medium text-foreground">
            {/* hello.primewave@gmail.com */}
          </p>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
