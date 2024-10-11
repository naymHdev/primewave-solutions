"use client";
import "./designProcess.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { designSteps } from "@/data/designProcess";
import Image from "next/image";

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
      <div className=" py-10">
        <ResponsiveContainer>
          <section className="overflow-hidden">
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner">
                {designSteps?.map((process) => (
                  <div key={process.id} className="scroll-section">
                    <section>
                      <div>
                        <Image
                          src={process.image}
                          alt={process.title}
                          width={70}
                          height={70}
                          priority={true}
                          quality={100}
                        />
                      </div>
                      <div className=" text-black">
                        <h2>{process.title}</h2>
                        <p>{process.description}</p>
                        <div>
                          {process.details.map((step, index) => (
                            <div key={index}>
                              <ul>
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
