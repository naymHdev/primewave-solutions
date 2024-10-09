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
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative mt-14">
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
              Websites Tailored to Their Unique Needs.
            </p>
          </div>
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
            <div>
              <h2 className="text-xl font-bold text-secondary">MAIN</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li className="hover:text-primary">
                  <a href="">Home</a>
                </li>
                <li className="hover:text-primary">
                  <a href="">About</a>
                </li>
                <li className="hover:text-primary">
                  <a href="">Services</a>
                </li>
                <li className="hover:text-primary">
                  <a href="">Portfolio</a>
                </li>
                <li className="hover:text-primary">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">SERVICES</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li className="hover:text-primary">Content</li>
                <li className="hover:text-primary">Design</li>
                <li className="hover:text-primary">Marketing</li>
                <li className="hover:text-primary">Strategy</li>
                <li className="hover:text-primary">Development</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">INDUSTRIES</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li className="hover:text-primary">Home Remodeling</li>
                <li className="hover:text-primary">Kitchen Remodeling</li>
                <li className="hover:text-primary">Bathroom Renovation</li>
                <li className="hover:text-primary">Flooring Installation</li>
                <li className="hover:text-primary">Home Painting</li>
                <li className="hover:text-primary">Landscaping Design</li>
                <li className="hover:text-primary">
                  Energy-efficient Home Improvements
                </li>
                <li className="hover:text-primary">
                  Accessibility Modifications
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">CONTACT</h2>
              <ul className="space-y-2 mt-4 font-semibold text-gray-800">
                <li className="hover:text-primary">
                  hello.primewave@gmail.com
                </li>
                <li className="hover:text-primary">+880 01770064053</li>
                <li className="font-extrabold text-secondary">Always Open</li>
              </ul>
            </div>
          </nav>
        </section>
      </footer>
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between my-24 font-medium text-black">
        <h3>© 2023 - {currentYear} Crafted. All Rights Reserved.</h3>
        <p>Designed & Developed in PrimeWave.</p>
      </div>
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
              <FaFacebook className="text-xl text-white" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://www.linkedin.com/in/naymhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://www.linkedin.com/in/naymhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-white" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300 rounded-full p-2 bg-[#1267b6]"
              href="https://wa.me/8801770064053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl text-white" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
