import Image from "next/image";

const DeliveryCard = ({
  title,
  icon,
  description,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      key={title}
      className={`w-full relative flex flex-col items-center space-y-2 ${
        index % 2 === 0 ? "lg:-translate-y-[4.5625rem]" : "-translate-y-0"
      }`}
    >
      {/* Dashed Line */}

      {index !== 3 && (
        <div
          className={`hidden lg:block absolute top-1/2 left-1/2 w-full h-[2px] border-t-2 border-dashed border-red-500 translate-x-[30px] -translate-y-[52px] origin-left ${
            index % 2 === 0 ? "rotate-[15deg]" : "-rotate-[20deg]"
          } z-0`}
        />
      )}

      {/* Circle */}
      <div className="relative z-10 w-[8.875rem] h-[8.875rem] flex items-center justify-center text-red-500 font-bold text-lg border-2 border-red-500 rounded-full bg-white">
        <Image
          src={icon}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-auto ${index === 2 ? "h-[3.125rem]" : "h-[3.75rem]"}`}
        />
        <div className="absolute top-[2rem] -right-5 w-10 h-10 flex justify-center items-center bg-primary rounded-full rotate-3">
          <p className="text-white">{index + 1}</p>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="font-medium text-xl text-[#0F0F0F] pt-4">{title}</h3>
      <p className="hidden lg:block max-w-[250px] text-base text-[#646464] mt-4 ml-[5.55rem]">
        {description}
      </p>
    </div>
  );
};
export default DeliveryCard;
