"use client";
import "./designProcess.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
      <div className=" py-20">
        <section className="overflow-hidden">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              <div className="scroll-section">
                <h3>Section 1</h3>
              </div>
              <div className="scroll-section">
                <h3>Section 2</h3>
              </div>
              <div className="scroll-section">
                <h3>Section 3</h3>
              </div>
              <div className="scroll-section">
                <h3>Section 4</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DesignProcess;
