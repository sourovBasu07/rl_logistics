import Image from "next/image";

const DeliveryCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#FFF1F2] flex flex-col gap-4 p-6">
      <div className="flex gap-5">
        <div className="min-w-[5.625rem] h-[5.625rem] bg-primary flex justify-center items-center rounded-full">
          <Image src={icon} alt={title} width={48} height={48} />
        </div>
        <p className="w-full font-semibold text-2xl text-black">{title}</p>
      </div>
      <p className="text-[#464646]">{description}</p>
    </div>
  );
};
export default DeliveryCard;
