import { services } from "@/data/services";
import Image from "next/image";

const MainServices = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {services?.map((service, index) => (
          <div key={index} className="border px-5 py-4 border-secondary">
            <div>
              <Image
                src={service.image}
                alt={service.description}
                width={100}
                height={100}
                priority={true}
                quality={100}
              />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-secondary">
                {service.category}
              </h2>
              <p className="mt-2 font-medium text-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainServices;
