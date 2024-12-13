import { ElementType } from "react";

const DeliveryCard = ({
  Icon,
  title,
  description,
}: {
  Icon: ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#FFF1F2] flex flex-col gap-4 p-6 ease-in-out duration-700 group hover:bg-primary">
      <div className="flex gap-5">
        <div className="min-w-[5.625rem] h-[5.625rem] bg-primary flex justify-center items-center rounded-full duration-500 group-hover:bg-white">
          {<Icon className="fill-white group-hover:fill-primary" />}
          {/* <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="fill-white hover:fill-secondary"
          /> */}
        </div>
        <p className="w-full font-semibold text-2xl text-black duration-500 group-hover:text-white">
          {title}
        </p>
      </div>
      <p className="text-[#464646] duration-500 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};
export default DeliveryCard;
