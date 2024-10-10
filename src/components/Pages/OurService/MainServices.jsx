"use client";

import { services } from "@/data/services";
import Image from "next/image";
import { motion } from "framer-motion";

const MainServices = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {services?.map((service, index) => (
          <motion.div
            key={index}
            className="relative border p-8 border-secondary overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div>
              <Image
                src={service.image}
                alt={service.description}
                width={100}
                height={100}
                priority={true}
                quality={100}
              />
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-secondary">
                  {service.category}
                </h2>
                <p className="mt-2 font-medium text-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Feature overlay */}
            <motion.div
              className="absolute inset-0 bg-secondary bg-opacity-100 p-8 text-white opacity-0 transition-all duration-300"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-3xl">{service.category}</h3>
              <ul className="space-y-2 mt-6">
                {service.features.map((feature, idx) => (
                  <>
                    <hr />
                    <li key={idx} className="font-medium">
                      {feature}
                    </li>
                  </>
                ))}
                <hr />
              </ul>
              <button className="border border-white px-5 font-medium py-2 mt-6">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MainServices;
