"use client";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import Link from "next/link";
import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./footer.css";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className=" bg-[#121212] mt-20">
        <ResponsiveContainer>
          <footer className="relative grid grid-cols-1 md:grid-cols-7 border-l border-l-[#1D1D1D] pl-1">
            <div className=" col-span-full md:col-span-5 py-20">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Link href="/" className=" absolute left-0 -top-[32px]">
                    <Image
                      src="/images/primeWave-white.png"
                      alt="Trustworthiness Icon"
                      width={250}
                      height={250}
                      priority={true}
                      quality={100}
                    />
                  </Link>
                  <p className=" text-gray-400 font-medium mt-[48px]">
                    We craft captivating websites that boost your brand's
                    digital footprint. Our team's expertise spans design,
                    development, and marketing. We deliver sites that shine
                    across all devices, from responsive layouts to
                    search-optimised content.
                  </p>

                  {/* Social media icons */}
                  <div className="flex items-center space-x-5 py-12">
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://web.facebook.com/naymHdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-3xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://www.linkedin.com/in/naymhdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-3xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://www.instagram.com/remodelwithnaym"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-3xl text-legendary" />
                    </a>
                    <a
                      className="hover:-mt-10 transition-all duration-300"
                      href="https://wa.me/8801770064053"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-3xl text-legendary" />
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
                    <div className=" mt-10 space-y-1">
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
            <div className="bg-[#1D1D1D] col-span-full md:col-span-2 py-20">
              <h2 className=" text-xl font-black text-white text-center mb-8">
                Got a project?
              </h2>

              <div className="flex flex-col items-center justify-center">
                <Link href="/discovery">
                  <div className="wave-button text-white font-medium">
                    <span>
                      Let's Talk <MdOutlineArrowOutward size={20} />
                    </span>
                    <div class="wave"></div>
                  </div>
                </Link>
              </div>
              <div className=" text-center font-black mt-8">
                <h2 className=" text-white text-xl">09:00 AM - 22:00 PM</h2>
                <p className=" text-gray-400 mt-1">Everyday</p>
              </div>
            </div>
          </footer>

          {/* Bottom Footer Section */}
          <footer className="border border-[#1D1D1D] py-3 md:py-6 px-1 grid grid-cols-1 md:grid-cols-3 items-center space-y-3 md:space-y-0">
            <div className="text-white font-medium md:font-semibold hidden md:flex space-x-4 items-center">
              <Link href="#" className="hover:text-legendary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-legendary">
                Terms
              </Link>
            </div>

            <div className=" hidden md:flex items-center justify-start md:justify-center relative">
              <div className=" rounded-full p-1 bg-white text-black absolute -left-3 md:left-[68px]">
                <BsShieldLockFill />
              </div>
              <div className="bg-[#A3A3A3] text-white pl-3 px-1 font-medium md:font-semibold">
                DMC
              </div>
              <div className=" bg-[#272727] text-white px-2 font-medium md:font-semibold">
                PROTECTED
              </div>
            </div>
            <div className=" flex items-center justify-center md:justify-end gap-2 text-white text-sm md:text-lg font-medium md:font-semibold">
              <h3>PrimeWave</h3>
              <h2>
                <FaRegCopyright />
              </h2>
              <h2>{currentYear}</h2>
            </div>
          </footer>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Footer;
