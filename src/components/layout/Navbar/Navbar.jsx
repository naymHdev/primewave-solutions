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
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        className="sticky top-0 left-0 right-0 z-50 bg-secondary"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <ResponsiveContainer>
          <nav>
            <div className="">
              <div className="flex justify-between items-center h-20">
                {/* Left: Logo */}
                <div className="flex-shrink-0 flex-1">
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

                {/* Middle: Menu for large devices */}
                <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-white hover:text-legendary text-xl font-medium"
                    >
                      {item.name}
                    </a>
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
                      // SVG icon for closing (X icon)
                      <AiOutlineClose className="size-8 font-black text-primary" />
                    ) : (
                      // RiMenu4Line icon for opening
                      <RiMenu4Line className="size-10 font-black text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <motion.div
                className="md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="pt-2 pb-3 space-y-1 text-white font-medium text-start">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block text-white transition-all duration-300  border-b hover:border-blue-300 text-2xl font-bold py-2 hover:px-2 hover:bg-blue-300"
                    >
                      {item.name}
                    </a>
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
                <div className="flex items-center justify-start space-x-5  py-6">
                  <a
                    className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-legendary"
                    href="https://web.facebook.com/naymHdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-legendary"
                    href="https://www.instagram.com/remodelwithnaym"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-legendary"
                    href="https://www.linkedin.com/in/naymhdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    className="hover:-mt-10 transition-all duration-300 rounded-full p-2 md:p-3 bg-legendary"
                    href="https://wa.me/8801770064053"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </motion.div>
            )}
          </nav>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default Navbar;
