"use client";
import Image from "next/image";
import logo from "../../../../public/images/PrimeWave-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative mt-20">
        <section className="container mx-auto px-4 md:px-0 py-8">
          <div>
            <Image
              className=""
              src={logo}
              alt="PrimeWave Solutions Logo"
              width={170}
              height={170}
              priority={true}
              quality={100}
            />
            <h1 className="text-5xl font-extrabold text-secondary -mt-4">
              PrimeWave
            </h1>
            <p className="text-gray-700 mt-1 w-1/2">
              Helping Remodeling Contractors Grow with Modern High-Impact
              Websites Tailored to Their Unique Needs🏡
            </p>
          </div>
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
            <div>
              <h2 className="text-xl font-bold text-secondary">MAIN</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">SERVICES</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li>Branding</li>
                <li>Content</li>
                <li>Design</li>
                <li>Marketing</li>
                <li>Strategy</li>
                <li>Development</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">INDUSTRIES</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li>Home Remodeling</li>
                <li>Kitchen Remodeling</li>
                <li>Bathroom Renovation</li>
                <li>Flooring Installation</li>
                <li>Home Painting</li>
                <li>Landscaping Design</li>
                <li>Energy-efficient Home Improvements</li>
                <li>Accessibility Modifications</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">CONTACT</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li>hello.primewave@gmail.com</li>
                <li>+880 01770064053</li>
                <li className="font-bold">Always Open</li>
              </ul>
            </div>
          </nav>
        </section>
      </footer>
      <footer className="bg-secondary py-2 px-4 md:px-0">
        <section className="grid md:flex items-center justify-between container mx-auto">
          <div className="grid md:flex items-center md:space-x-3 space-y-2 md:space-y-0 font-medium">
            <Link href="#" className="text-[#66A6EC] hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#66A6EC] hover:text-primary">
              Refund Policy
            </Link>
            <Link href="#" className="text-[#66A6EC] hover:text-primary">
              Terms Of Service
            </Link>
          </div>
          {/* Social media links with icons */}
          <div className="flex items-center justify-end space-x-5 mt-4 md:mt-0">
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://web.facebook.com/naymHdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://www.linkedin.com/in/naymhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://www.linkedin.com/in/naymhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://wa.me/8801770064053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
