import ResponsiveContainer from "./ResponsiveContainer";

const SectionName = ({ name, title, details }) => {
  return (
    <>
      <div className="py-8 md:py-12 mt-6 md:mt-24">
        <ResponsiveContainer>
          <section className="grid grid-cols-1 md:grid-cols-7 gap-2">
            <div className="col-span-full md:col-span-2 group">
              <h3 className="text-secondary dark:text-gray-300 text-lg font-semibold tracking-wider uppercase">
                {name}
              </h3>
              <div className="border-b-[3px] border-legendary w-20 md:w-14 group-hover:w-[150px] transition-all duration-300 mt-" />
            </div>
            <div className="col-span-full md:col-span-5 mt-2 md:mt-0">
              <h2 className="text-2xl md:text-5xl text-secondary dark:text-white font-semibold md:font-bold leading-tight">
                {title}
              </h2>

              <p className="font-medium mt-4 text-gray-700 dark:text-gray-300 md:text-lg">
                {details}
              </p>
            </div>
          </section>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SectionName;
