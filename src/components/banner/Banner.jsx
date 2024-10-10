import Image from "next/image";
import banner from "../../../public/images/pixelcut-export.jpeg";
import Button from "../common/Button";

const Banner = () => {
  const currentYear = new Date().getFullYear();

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
      <div className="absolute md:top-1/4 top-[110px]">
        <div className=" text-center px-1 md:w-9/12 mx-auto">
          <h1 className="text-2xl md:text-4xl text-black font-bold">
            Building <span className="text-primary">Digital Foundations</span>{" "}
            for Remodeling
          </h1>
          <p className=" text-black text-center mt-8 font-medium md:text-xl">
            We specialize in creating modern, visually engaging, and
            conversion-focused websites tailored to the unique needs of
            <span className="font-extrabold text-secondary px-1">
              remodeling contractors.
            </span>
            From showcasing your{" "}
            <span className="font-extrabold text-secondary px-1">
              portfolio and client testimonials to optimizing your site
            </span>{" "}
            for local search rankings, our{" "}
            <span className="font-extrabold text-secondary px-1">
              custom solutions
            </span>{" "}
            are designed to elevate your online presence, attract more clients,
            and fuel long-term business growth.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button
            label="BOOK A CALL"
            bg="bg-primary"
            hover="hover:bg-legendary"
          />
        </div>
        <div className=" flex flex-wrap items-center justify-center md:gap-4 md:mt-8 mt-20 md:w-full w-8/12 mx-auto">
          <div>
            <h2 className="text-black font-bold">
              Top Rated Agency {currentYear}
            </h2>
          </div>
          <div className=" flex items-center gap-2">
            <Image
              src="/icons/google-text.png"
              alt="Google Text Logo"
              width={90}
              height={90}
              priority={true}
              quality={100}
            />
            <Image
              src="/icons/rating.png"
              alt="Google Rating in PrimeWave Solutions"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <h2 className="text-black font-bold">5.0</h2>
          </div>
          <div>
            <p className="text-sm text-black">verified by Trustindex</p>
          </div>
        </div>
      </div>

      <section className="bg-secondary md:mt-0 mt-60 grid md:flex items-center justify-center gap-16 py-10 md:py-6">
        <div className="flex items-center flex-col text-center">
          <Image
            src="/icons/growth.png"
            alt="Google Text Logo"
            width={80}
            height={80}
            priority={true}
            quality={100}
          />
          <p className="text-xl font-bold mt-1 text-white">More Traffic</p>
        </div>
        <div className="flex items-center flex-col text-center">
          <Image
            src="/icons/trustworthiness.png"
            alt="Google Text Logo"
            width={80}
            height={80}
            priority={true}
            quality={100}
          />
          <p className="text-xl font-bold mt-1 text-white">
            Better Lead Quality
          </p>
        </div>
        <div className="flex items-center flex-col text-center">
          <Image
            src="/icons/selling.png"
            alt="Google Text Logo"
            width={80}
            height={80}
            priority={true}
            quality={100}
          />
          <p className="text-xl font-bold mt-1 text-white">
            Sell More Remodeling
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
