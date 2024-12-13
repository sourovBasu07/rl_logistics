import { transaportCardDetails } from "@/data";
import Image from "next/image";
import Button from "../shared/Button";

type CardProps = {
  title: string;
  image: string;
  country?: string;
};

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="">
      <div className="relative w-[240px] h-[360px] rounded-[0.375rem]">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          fill
          sizes="100vw"
          className="w-full h-full rounded-[0.375rem] object-cover"
        />
        {/* <div className="absolute">
          <p className="">{title}</p>
          <div className="flex items-center gap-[0.375rem]">
            <Image
              src="/icons/location_icon.svg"
              alt="Location icon"
              width={10}
              height={12}
            />
            <p className="">{country}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-sectionBg py-20">
      <div className="container flex items-center gap-9">
        <div className="flex flex-col gap-16">
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
        <div className="flex items-center gap-3">
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
