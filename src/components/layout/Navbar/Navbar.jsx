"use client";
import { useState } from "react";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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
import Button from "@/components/common/Button";
import Image from "next/image";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
    <motion.nav
      className="sticky top-0 left-0 right-0 z-50 bg-secondary"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.50, ease: easeInOut }}
    >
      <ResponsiveContainer>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="">
            <Link href="/" className=" absolute -top-[87px]">
              <Image
                src="/images/primeWave-white.png"
                alt="Trustworthiness Icon"
                width={250}
                height={250}
                priority={true}
                quality={100}
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className=" flex items-center md:space-x-6">
            <div className=" hidden md:flex">
              <Link href="/discovery">
                <Button
                  label="Book a Call"
                  bg="bg-secondary"
                  hover="hover:bg-legendary"
                />
              </Link>
            </div>
            <button onClick={handleMenuToggle}>
              <RiMenu4Line className="size-10 font-black text-white" />
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
            href="https://www.instagram.com/remodelwithnaym"
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
    </motion.nav>
  );
};

export default Navbar;
