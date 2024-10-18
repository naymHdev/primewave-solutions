const ResponsiveContainer = ({ children }) => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {children}
    </div>
  );
};

export default ResponsiveContainer;
