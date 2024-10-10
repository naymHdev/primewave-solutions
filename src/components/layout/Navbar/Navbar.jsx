"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2, // Add stagger effect for children
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <ResponsiveContainer>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-4xl font-extrabold">
            <Link href="/">
              <span className="text-legendary font-black font-montserrat">
                PrimeWave
              </span>
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="">
            <button onClick={handleMenuToggle}>
              <RiMenu4Line className="size-10 font-black text-[#10355D]" />
            </button>
          </div>
        </div>
      </ResponsiveContainer>

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
        <motion.div
          className="flex flex-col items-end space-y-3 px-10 transition-all duration-300"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.a
            href="/"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
            variants={menuItemVariants}
          >
            Home
          </motion.a>

          <motion.a
            href="/about"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
            variants={menuItemVariants}
          >
            About
          </motion.a>

          <motion.a
            href="/works"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
            variants={menuItemVariants}
          >
            Works
          </motion.a>

          <motion.a
            href="/services"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
            variants={menuItemVariants}
          >
            Services
          </motion.a>

          <motion.a
            href="/contact"
            className="py-2 text-3xl font-bold hover:text-[#104F89]"
            variants={menuItemVariants}
          >
            Contact Us
          </motion.a>
        </motion.div>

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
          <p className=" font-medium text-foreground"></p>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
