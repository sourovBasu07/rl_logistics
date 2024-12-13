import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { industriesData } from "@/data";

const Industries = () => {
  return (
    <section className="container flex flex-col gap-9 pb-24">
      <div className="flex items-center gap-20">
        <div className="w-[500px] h-[250px] rounded-md">
          <Image
            src="/images/manage_works.jpeg"
            alt="Manage works"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <SectionTitle
          name="WE SPECIALISE IN THE TRANSPORTATION"
          title="Manage your complex logistics as can focus"
          description="Transmax is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of about dummy merchandise through land transport."
        />
      </div>
      <div className="flex items-center gap-20">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-5">
            {industriesData.map((industry) => (
              <li
                key={industry}
                className="font-medium text-2xl text-[#373737]"
              >
                {industry}
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {industriesData.map((industry) => (
              <li
                key={industry}
                className="font-medium text-2xl text-[#373737]"
              >
                {industry}
              </li>
            ))}
          </div>
        </div>
        <div className="w-[500px] h-[210px] rounded-md">
          <Image
            src="/images/industry_image.jpeg"
            alt="Manage works"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
export default Industries;
