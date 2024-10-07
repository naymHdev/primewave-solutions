import Image from "next/image";
import banner from "../../../public/images/pixelcut-export.jpeg";

const Banner = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
        />
      </div>
      <div className="absolute top-1/4">
        <div className=" text-center w-9/12 mx-auto">
          <h1 className="text-4xl font-extrabold text-black">
            Building Digital Foundations for Remodeling
          </h1>
          <p className=" text-black text-center mt-6 font-medium">
            We specialize in creating modern, visually engaging, and
            conversion-focused websites tailored to the unique needs of
            remodeling contractors. From showcasing your portfolio and client
            testimonials to optimizing your site for local search rankings, our
            custom solutions are designed to elevate your online presence,
            attract more clients, and fuel long-term business growth.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 mt-6">
          <button className="text-white bg-[#0E4E88] px-5 py-3 font-medium">
            SERVICES
          </button>
          <button className="text-white bg-[#0E4E88] px-5 py-3 font-medium">
            BOOK A CALL
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
