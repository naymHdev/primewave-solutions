import Image from "next/image";

const FeaturedWorksCard = ({ portfolio }) => {
  const { projectTitle, companyName, image } = portfolio || {};

  return (
    <>
      <div>
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={projectTitle}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            className="filter"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 z-0 p-7 text-white">
          <h3 className=" text-2xl font-bold drop-shadow-lg">{projectTitle}</h3>
          <p className=" text-lg font-medium">{companyName}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorksCard;
