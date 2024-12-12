import { stats } from "@/data";
import Image from "next/image";
import StatsCard from "./StatsCard";

const AboutCompany = () => {
  return (
    <section className="bg-sectionBg py-14">
      <div className="container flex flex-col items-center gap-10">
        <div className="w-[1064px] max-w-full h-[471px] rounded-md mx-auto">
          <Image
            src="/images/cargo_image.png"
            alt="Cargo image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex gap-12 divide-x-[0.89px] divide-[#5E5E5E]">
          {stats.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutCompany;
