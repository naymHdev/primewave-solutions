const ResponsiveContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-0 xl:px-12">
      {children}
    </div>
  );
};

export default ResponsiveContainer;
