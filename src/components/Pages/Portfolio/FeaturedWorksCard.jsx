import Image from "next/image";

const FeaturedWorksCard = ({ portfolio }) => {
  const { projectTitle, companyName, image } = portfolio || {};

  return (
    <>
      <div>
        <Image
          src={image}
          alt={projectTitle}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
        />
        <div className="absolute bottom-10 left-10 right-0 text-white">
          <h3 className=" text-3xl font-bold">{projectTitle}</h3>
          <p className=" text-lg font-medium">{companyName}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorksCard;
