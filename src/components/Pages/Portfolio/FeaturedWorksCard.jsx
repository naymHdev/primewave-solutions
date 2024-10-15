import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedWorksCard = ({ portfolio }) => {
  const { projectTitle, companyName, image } = portfolio || {};

  return (
    <div className="relative overflow-hidden  cursor-pointer group">
      {/* Image Container with Zoom Effect */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[450px]"
      >
        <Image
          src={image}
          alt={projectTitle}
          fill
          priority={true}
          quality={100}
          className="group-hover:scale-110 object-cover transition-transform duration-500 ease-out"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 z-10 p-4 md:p-6 text-white">
        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
          {projectTitle}
        </h3>
        <p className="text-sm md:text-lg">{companyName}</p>
      </div>
    </div>
  );
};

export default FeaturedWorksCard;
