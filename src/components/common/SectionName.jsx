"use client";
import { motion } from "framer-motion";
import ResponsiveContainer from "./ResponsiveContainer";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SectionName = ({ name, title, details }) => {
  return (
    <div className="py-8 md:py-12 mt-6 md:mt-16">
      <ResponsiveContainer>
        <motion.section
          className="grid grid-cols-1 md:grid-cols-7 gap-2"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <div className="col-span-full md:col-span-2 group">
            <h3 className="text-secondary dark:text-gray-300 text-lg font-semibold tracking-wider uppercase">
              {name}
            </h3>
            <div className="border-b-[3px] border-legendary w-20 md:w-14 group-hover:w-[150px] transition-all duration-300 mt-2" />
          </div>
          <div className="col-span-full md:col-span-5 mt-2 md:mt-0">
            <h2 className="text-2xl md:text-5xl text-secondary dark:text-white font-semibold md:font-bold leading-tight">
              {title}
            </h2>

            <p className="font-medium mt-4 text-gray-700 dark:text-gray-300 md:text-lg">
              {details}
            </p>
          </div>
        </motion.section>
      </ResponsiveContainer>
    </div>
  );
};

export default SectionName;
