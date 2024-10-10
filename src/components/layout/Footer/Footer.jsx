"use client";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import Link from "next/link";
import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className=" bg-[#121212] py-20 mt-">
        <ResponsiveContainer>
          <footer className=" grid grid-cols-1 md:grid-cols-7">
            <div className=" col-span-full md:col-span-5">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h2 className=" text-3xl font-black text-legendary">
                    PrimeWave
                  </h2>
                  <p className=" text-gray-400 font-medium mt-6">
                    We craft captivating websites that boost your brand's
                    digital footprint. Our team's expertise spans design,
                    development, and marketing. We deliver sites that shine
                    across all devices, from responsive layouts to
                    search-optimised content.
                  </p>

                  {/* Social media icons */}
                  <div className="flex items-center space-x-6 py-8">
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://web.facebook.com/naymHdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://www.linkedin.com/in/naymhdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://www.linkedin.com/in/naymhdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://wa.me/8801770064053"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-xl text-legendary" />
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className=" text-xl font-black text-white">Contact Us</h2>
                  <div className=" mt-6 text-gray-400 font-medium">
                    <h3>
                      Based in the USA, offering global services and working
                      remotely. Reach out to us!
                    </h3>
                    <div className=" mt-10 space-y-2">
                      <p>
                        <a
                          href="https://wa.me/88001770064053"
                          className=" hover:text-legendary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +880 01770064053
                        </a>
                      </p>
                      <p>
                        <a
                          href="mailto:hello.primewave@gmail.com"
                          className=" hover:text-legendary hover:underline"
                        >
                          hello.primewave@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1D1D] col-span-full md:col-span-2"></div>
          </footer>

          {/* Bottom Footer Section */}
          <footer className="border border-[#1D1D1D] py-6 px-1 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className=" flex items-center gap-2 text-white text-lg font-semibold">
              <h3 className="">
                PrimeWave <span>{currentYear}</span>
              </h3>
              <div>/</div>
              <Link href="#" className=" underline hover:text-legendary">
                Privacy Policy
              </Link>
            </div>
            <div className=" flex items-center relative">
              <div className=" rounded-full p-1 bg-white text-black absolute -left-3">
                <BsShieldLockFill />
              </div>
              <div className="bg-[#A3A3A3] text-white pl-3 px-1 font-semibold">
                DMC
              </div>
              <div className=" bg-[#272727] text-white px-2 font-semibold">
                PROTECTED
              </div>
            </div>
            <div></div>
          </footer>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Footer;
