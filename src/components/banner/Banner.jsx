import Image from "next/image";
import Button from "../common/Button";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import ResponsiveContainer from "../common/ResponsiveContainer";

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

        {/* Banner Text Section */}
        <ResponsiveContainer>
          <div className="absolute top-0 py-10 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <div>
                <h1 className="text-4xl md:text-5xl leading-8 text-white font-black">
                  Elevate Your{" "}
                  <span className=" text-legendary">Remodeling</span> Business
                </h1>
                <p className="text-white mt-4 text-lg font-medium">
                  We build modern, conversion-focused websites for{" "}
                  <span className="font-extrabold text-legendary">
                    remodeling contractors
                  </span>
                  . Showcase your portfolio, attract more clients, and grow your
                  business.
                </p>
              </div>
              <div className=" lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-6 lg:mt-10">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/growth.png"
                    alt="Growth Icon"
                    width={40}
                    height={40}
                    priority={true}
                    quality={100}
                  />
                  <p className="font-bold mt-2 text-white">More Traffic</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/trustworthiness.png"
                    alt="Trustworthiness Icon"
                    width={40}
                    height={40}
                    priority={true}
                    quality={100}
                  />
                  <p className="font-bold mt-2 text-white">
                    Better Lead Quality
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/selling.png"
                    alt="Selling Icon"
                    width={40}
                    height={40}
                    priority={true}
                    quality={100}
                  />
                  <p className="font-bold mt-2 text-white">
                    Sell More Remodeling
                  </p>
                </div>
              </div>
              <div className=" mt-8 flex items-center gap-4">
                <VscWorkspaceTrusted className=" size-8 text-legendary" />
                <h3 className="text-2xl font-extrabold lg:font-black text-white">
                  100% Money Back Guarantee
                </h3>
              </div>
              <div className="lg:mt-10 mt-6 hidden lg:flex items-center text-white space-x-2">
                <h2 className="text-sm font-bold">
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
                  <h2 className="text-sm font-bold">5.0</h2>
                </div>
                <div>
                  <p className="text-sm">verified by Trustindex</p>
                </div>
              </div>
            </section>
            <section>
              <div className="relative w-full h-full">
                <Image
                  className=" object-cover"
                  src="/images/primeWaveBanner.png"
                  alt="Banner Image"
                  fill
                  priority={true}
                  quality={100}
                />
              </div>
            </section>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Banner;
