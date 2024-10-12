import Image from "next/image";
import Button from "../common/Button";
import Link from "next/link";

const Banner = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="relative">
        <div className=" flex items-center overflow-hidden">
          <video
            className="w-full h-screen"
            preload="metadata"
            autoPlay
            muted
            loop
            loading="lazy"
          >
            <source src="/videos/bannerbg.mp4" type="video/mp4" />
            <source src="/videos/bannerbg.webm" type="video/webm" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
          <video
            className="w-full h-screen"
            preload="metadata"
            autoPlay
            muted
            loop
            loading="lazy"
          >
            <source src="/videos/bannerbg.mp4" type="video/mp4" />
            <source src="/videos/bannerbg.webm" type="video/webm" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
          <video
            className="w-full h-screen"
            preload="metadata"
            autoPlay
            muted
            loop
            loading="lazy"
          >
            <source src="/videos/bannerbg.mp4" type="video/mp4" />
            <source src="/videos/bannerbg.webm" type="video/webm" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
          <video
            className="w-full h-screen"
            preload="metadata"
            autoPlay
            muted
            loop
            loading="lazy"
          >
            <source src="/videos/bannerbg.mp4" type="video/mp4" />
            <source src="/videos/bannerbg.webm" type="video/webm" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
        <section className="absolute md:top-0 -top-[210px] w-full h-full flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-white font-black">
              Elevate Your <span className=" text-legendary">Remodeling</span>{" "}
              Business
            </h1>
            <p className="text-white mt-4 text-lg md:w-1/2 w-11/12 mx-auto">
              We build modern, conversion-focused websites for{" "}
              <span className="font-extrabold text-legendary">
                remodeling contractors
              </span>
              . Showcase your portfolio, attract more clients, and grow your
              business.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Link href="/discovery">
                <Button
                  label="BOOK A CALL"
                  bg="bg-primary"
                  hover="hover:bg-legendary"
                />
              </Link>
            </div>
          </div>
          <div className=" hidden md:flex flex-col md:flex-row justify-center items-center gap-2 mt-6  w-10/12 mx-auto text-black md:text-white">
            <h2 className=" font-bold text-sm">
              Top Rated Agency {currentYear}
            </h2>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/google-text.png"
                alt="Google Text Logo"
                width={70}
                height={70}
                priority={true}
                quality={100}
              />
              <Image
                src="/icons/rating.png"
                alt="Google Rating in PrimeWave Solutions"
                width={60}
                height={60}
                priority={true}
                quality={100}
              />
              <h2 className=" font-bold text-sm">5.0</h2>
            </div>
            <div>
              <p className="text-sm ">verified by Trustindex</p>
            </div>
          </div>
        </section>

        <section className="bg-secondary mt-[90px] md:mt-0 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/growth.png"
              alt="Growth Icon"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <p className="text-lg font-bold mt-2 text-white">More Traffic</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/trustworthiness.png"
              alt="Trustworthiness Icon"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <p className="text-lg font-bold mt-2 text-white">
              Better Lead Quality
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/selling.png"
              alt="Selling Icon"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <p className="text-lg font-bold mt-2 text-white">
              Sell More Remodeling
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
