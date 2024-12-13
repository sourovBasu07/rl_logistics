import { whyChooseUsData } from "@/data";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full bg-[#FFF1F2] flex flex-col items-center gap-2 p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[5.625rem] h-[5.625rem] bg-primary flex justify-center items-center rounded-full">
          <Image src={icon} alt={title} width={48} height={48} />
        </div>
        <p className="w-full font-semibold text-2xl text-black">{title}</p>
      </div>
      <p className="text-[#464646]">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="container w-full flex flex-col items-center gap-12 pt-12 pb-24">
      <SectionTitle
        name="Why Choose Us"
        title="Why choosing the right partner for your need is crucial"
        center
        className="w-[900px] max-w-full"
      />
      <div className="w-full flex gap-5">
        {whyChooseUsData.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
