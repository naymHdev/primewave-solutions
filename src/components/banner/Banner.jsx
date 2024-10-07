import Image from "next/image";
import banner from "../../../public/images/pixelcut-export.jpeg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={banner}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        priority={true}
        quality={100}
      />
    </div>
  );
};

export default Banner;
