const SectionName = ({ name, title, details }) => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0 py-8 md:py-12 mt-6 md:mt-24">
        <section className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-full md:col-span-2">
            <h3 className="text-gray-600 text-lg font-semibold tracking-wider uppercase">
              {name}
            </h3>
          </div>
          <div className="col-span-full md:col-span-5">
            <h2 className="text-4xl md:text-5xl text-secondary font-bold leading-tight">
              {title}
            </h2>
            <div className="border-b-4 border-primary w-24 hover:w-40 transition-all duration-300 my-4" />
            <p className="font-medium text-gray-700 text-lg">{details}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionName;
