import { whyChooseUsData } from "@/data";
import SectionTitle from "../SectionTitle";
import { ElementType } from "react";

const Card = ({
  Icon,
  title,
  description,
}: {
  Icon: ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full bg-[#FFF1F2] flex flex-col items-center gap-2 p-6 duration-700 group hover:bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[5.625rem] h-[5.625rem] bg-primary flex justify-center items-center rounded-full duration-500 group-hover:bg-white">
          {
            <Icon className="fill-white duration-500 group-hover:fill-primary" />
          }
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

const WhyChooseUs = () => {
  return (
    <section className="container w-full flex flex-col items-center gap-12 pt-12 pb-24">
      <SectionTitle
        name="Why Choose Us"
        title="Why choosing the right partner for your need is crucial"
        center
        className="w-[900px] max-w-full"
      />
      <div className="w-full flex flex-col lg:flex-row gap-5">
        {whyChooseUsData.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
