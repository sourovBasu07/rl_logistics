import Image from "next/image";

const ServiceCard = ({
  image,
  title,
  icon,
  description,
}: {
  image: string;
  title: string;
  icon: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute right-7 -bottom-[2.75rem] w-[5.5rem] h-[5.5rem] flex justify-center items-center bg-primary rounded-full border-[3px] border-white">
          <Image src={icon} alt={title} width={47} height={47} />
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-b-md border border-[rgba(255, 214, 214, 0.96)] border-t-0 pt-6 pb-4 pl-[.625rem] pr-4">
        <p className="font-semibold text-2xl lg:text-[2rem] lg:leading-[2.9rem]">
          {title}
        </p>
        <p className="text-[#464646] leading-6">{description}</p>
        <div className="flex items-center gap-2">
          <p className="font-medium text-neutralBlack">Explore More</p>
          <Image
            src="/icons/long_arrow_icon.png"
            alt="explore arrow"
            width={39}
            height={10}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
