"use client";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Info Gathering",
    imgSrc: "/icons/data-gathering.png",
    details:
      "In this phase, we gather all the required information about the project goals, target audience, and competitors.",
  },
  {
    title: "Planning",
    imgSrc: "/icons/planning.png",
    details:
      "We create a detailed project plan, including timelines, required resources, and technologies to be used.",
  },
  {
    title: "Design",
    imgSrc: "/icons/web-design.png",
    details:
      "The design phase includes creating wireframes, prototypes, and the final visual style of the product.",
  },
  {
    title: "Development",
    imgSrc: "/icons/coding.png",
    details:
      "The development phase involves coding the front-end and back-end of the project, ensuring all features work as planned.",
  },
  {
    title: "Testing & Launch",
    imgSrc: "/icons/testing.png",
    details:
      "The final phase includes rigorous testing for bugs and issues, followed by the launch of the project.",
  },
];

const HowGoing = () => {
  return (
    <>
      <SectionName
        name="Work Process"
        title="How It Is Going"
        details="We offer professional home remodeling services to help your business
          attract more clients and keep them happy!"
      />

      <div className="">
        <ResponsiveContainer>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {steps?.map((step, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg shadow-lg transition-all duration-300 hover:-mt-10"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  width={90}
                  height={90}
                />
                <div className="mt-6">
                  <h2 className="text-xl font-bold">{step.title}</h2>
                  <p className="font-medium mt-2">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default HowGoing;
