import { teamMembers } from "@/data";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const TeamCard = ({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="relative w-full h-[377px] rounded-md group">
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute right-5 top-5 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
        <div className="w-8 h-8 bg-primary flex justify-center items-center rounded-full cursor-pointer">
          <Image
            src="/icons/chat_icon.png"
            alt="chat icon"
            width={22}
            height={22}
          />
        </div>
        <div className="w-8 h-8 bg-primary flex justify-center items-center rounded-full cursor-pointer">
          <Image
            src="/icons/twitter_logo.png"
            alt="chat icon"
            width={22}
            height={22}
          />
        </div>
        <div className="w-8 h-8 bg-primary flex justify-center items-center rounded-full cursor-pointer">
          <Image
            src="/icons/instagram_logo.png"
            alt="chat icon"
            width={22}
            height={22}
          />
        </div>
      </div>
      <div className="absolute -bottom-7 w-[80%] ml-[10%] bg-white rounded-md text-center py-2">
        <p className="font-semibold text-black">{name}</p>
        <p className="text-xs text-[#535353]">{title}</p>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="container flex flex-col items-center gap-16 pb-24">
      <SectionTitle name="OUR TEAM" title="Meet our expert team" center />
      <div className="flex gap-9">
        {teamMembers.map((member, index: number) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
export default OurTeam;
