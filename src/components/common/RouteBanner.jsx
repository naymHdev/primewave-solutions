import Button from "./Button";

const RouteBanner = ({ src, name, title }) => {
  return (
    <>
      <section className="relative w-full h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white w-10/12 md:w-7/12 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
          <h2 className="text-xl md:text-3xl font-semibold mt-4">{title}</h2>
          <div className=" mt-8">
            <Button label="Book a Call" bg="bg-legendary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default RouteBanner;
