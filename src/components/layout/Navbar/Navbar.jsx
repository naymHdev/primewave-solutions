"use client";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
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

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div className="bg-secondary">
        <ResponsiveContainer>
          <nav>
            <div className="flex justify-between items-center h-20">
              {/* Left: Logo */}
              <div className="flex-shrink-0 flex-1">
                <Link href="/">
                  <Image
                    src="/images/primeWave-white.png"
                    alt="Trustworthiness Icon"
                    width={200}
                    height={200}
                    priority={true}
                    quality={100}
                  />
                </Link>
              </div>

              {/* Middle: Menu for large devices */}
              <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-legendary text-lg font-bold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right: Button */}
              <div className="hidden md:flex flex-1 justify-end">
                <Link href="/discovery">
                  <Button
                    label="Book a Call"
                    bg="bg-secondary"
                    hover="hover:bg-legendary"
                  />
                </Link>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {isOpen ? (
                    <AiOutlineClose className="text-white" size={24} />
                  ) : (
                    <RiMenu4Line className="text-white" size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              className={`md:hidden overflow-hidden transition-all duration-300`}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <div className="pt-2 pb-3 space-y-1 text-white font-medium text-start">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-white transition-all duration-300 border-b hover:border-blue-300 text-2xl font-bold py-2 hover:px-2 hover:bg-blue-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-start">
                <Link href="/">
                  <h2 className="text-5xl font-extrabold text-white">
                    PrimeWave
                  </h2>
                </Link>
                <div className="border border-[#1268B6] my-4 w-4/12 hover:w-8/12 transition-all duration-300" />
              </div>

              {/* Social media links with icons */}
              <div className="flex items-center justify-start space-x-5 py-6">
                {[
                  {
                    href: "https://web.facebook.com/naymHdev",
                    icon: <FaFacebook className="text-xl" />,
                  },
                  {
                    href: "https://www.instagram.com/remodelwithnaym",
                    icon: <FaInstagram className="text-xl" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/naymhdev",
                    icon: <FaLinkedin className="text-xl" />,
                  },
                  {
                    href: "https://wa.me/8801770064053",
                    icon: <FaWhatsapp className="text-xl" />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-legendary"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </nav>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default Navbar;
