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

const DesignProcess = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
      <div className=" bg-gradient-to-r from-secondary via-primary to-legendary">
        <ResponsiveContainer>
          <section className="overflow-hidden">
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner gap-10">
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
                      <div className="mt-10">
                        <h2 className=" text-4xl font-black text-legendary">
                          {process.title}
                        </h2>
                        <p className=" text-white font-medium mt-3 text-lg">
                          {process.description}
                        </p>
                        <div className=" mt-8 font-medium text-white">
                          {process.details.map((step, index) => (
                            <div key={index}>
                              <ul className="flex items-center gap-3 mt-3 text-lg">
                                <MdOutlineArrowForwardIos className=" text-legendary text-3xl" />
                                <li>{step}</li>
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
      </div>
    </>
  );
};

export default DesignProcess;
