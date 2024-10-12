"use client";

import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import Image from "next/image";
import { motion } from "framer-motion";

const techTools = [
  {
    icon: "/icons/front-development.png",
    category: "Frontend Development",
    tools: [
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: "/icons/Backend Development .png",
    category: "Backend Development",
    tools: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "SQL"],
  },
  {
    icon: "/icons/devops.png",
    category: "DevOps & Hosting",
    tools: ["Vercel", "Netlify", "Heroku", "AWS", "Docker"],
  },
  {
    icon: "/icons/version-control.png",
    category: "Version Control",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    icon: "/icons/Design & Prototyping .png",
    category: "Design & Prototyping",
    tools: ["Figma", "Webflow", "Adobe XD", "Photoshop", "Sketch"],
  },
];

const TechToolsUsed = () => {
  return (
    <>
      <SectionName
        name="Powered by Innovation"
        title="Technology and Tools Used"
        details="We employ a wide array of cutting-edge technologies and tools to
            deliver the best possible digital solutions for our clients. Below
            are the key tools and frameworks we utilize."
      />
      <section className="py-16 bg-gray-50">
        <ResponsiveContainer>
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techTools.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <Image
                    src={tech.icon}
                    alt={tech.category}
                    width={100}
                    height={100}
                    priority={true}
                    quality={100}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-secondary mt-6 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="text-lg text-black font-medium flex items-center gap-2"
                    >
                      <Image
                        src="/icons/icons8-arrow.gif"
                        alt={tech.category}
                        width={20}
                        height={20}
                        priority={true}
                        quality={100}
                      />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default TechToolsUsed;
