import { transaportCardDetails } from "@/data";
import Image from "next/image";
import Button from "../shared/Button";

type CardProps = {
  title: string;
  image: string;
  country?: string;
};

const Card = ({ title, image, country }: CardProps) => {
  return (
    <div className="relative w-full h-[360px] group">
      <div className="relative h-full rounded-[0.375rem]">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full rounded-[0.375rem] object-cover"
        />
        <div className="absolute inset-0 w-full h-full rounded-[0.375rem] duration-500 group-hover:bg-black/30" />
        <div className="absolute left-5 bottom-5 duration-500 group-hover:-translate-y-5">
          <p className="font-semibold text-[1.375rem] text-white">{title}</p>
          <div className="flex items-center gap-[0.375rem]">
            <Image
              src="/icons/location_white.svg"
              alt="Location icon"
              width={14}
              height={14}
            />
            <p className="text-base text-white">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-sectionBg py-20">
      <div className="container flex items-center gap-9">
        <div className="max-w-[525px] flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-black">
              Fast and Safe <span className="text-primary">Transport</span>
            </h1>
            <p className="text-black">
              Reliable logistics and transport solutions ensuring timely
              delivery, cost-efficiency, and seamless supply chain management.{" "}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter your booking number.."
              className="w-[300px] border-[0.4px] border-[rgba(77,77,77,0.8)] rounded p-[.625rem]"
            />
            <Button text="Track Order" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {transaportCardDetails.map((item, index: number) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              country={item.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
