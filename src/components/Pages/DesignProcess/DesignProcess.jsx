"use client";
import "./designProcess.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { designSteps } from "@/data/designProcess";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import SectionName from "@/components/common/SectionName";
import {
  animate,
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

// Colors
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const DesignProcess = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // framer motion
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <SectionName
        name="Home Remodeling Website Design Process"
        title="Explore Our Home Remodeling Website Design Process"
        details="Discover how we craft custom websites tailored for home remodeling contractors, delivering impactful results."
      />
      <motion.div
        style={{ backgroundImage }}
        className="md:py-10"
      >
        <ResponsiveContainer>
          <section className="overflow-hidden">
            <div ref={triggerRef}>
              <div
                ref={sectionRef}
                className="scroll-section-inner gap-2 md:gap-10"
              >
                {designSteps?.map((process) => (
                  <div key={process.id} className="scroll-section">
                    <section>
                      <div>
                        <Image
                          src={process.image}
                          alt={process.title}
                          width={100}
                          height={100}
                          priority={true}
                          quality={100}
                        />
                      </div>
                      <div className="md:mt-10">
                        <h2 className="md:text-4xl font-black text-legendary">
                          {process.title}
                        </h2>
                        <p className=" text-white font-medium mt-3 text-sm md:text-lg">
                          {process.description}
                        </p>
                        <p className="text-white font-semibold text-xl mt-4 md:mt-6">
                          Here’s how our team does it:
                        </p>
                        <div className="md:mt-6 font-medium text-white">
                          {process.details.map((step, index) => (
                            <div key={index}>
                              <ul className="flex md:items-center gap-1 md:gap-3 mt-3">
                                <MdOutlineArrowForwardIos className=" text-legendary text-2xl" />
                                <li className=" text-sm md:text-lg font-semibold text-white">
                                  {step}
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default DesignProcess;
