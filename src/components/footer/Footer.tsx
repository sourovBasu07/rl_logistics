import { industryLists, servicesLists, usefulLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#020407] pt-[5.5rem]">
      <div className="container">
        <div className="flex justify-between">
          <div className="max-w-[415px] flex flex-col">
            <Image
              src="/images/footer_logo.png"
              alt="footer_logo"
              width={194}
              height={36}
            />
            <div className="flex flex-col gap-2 mt-7">
              <h3 className="text-white">About Company</h3>
              <p className="text-white">
                We work with passion of taking challenges and creating new ones
                in advertising any ready more sector.
              </p>
              <h3 className="text-white">admin@rllogistics.com</h3>
            </div>
            <div className="flex items-center gap-2 pt-4 pb-6">
              <Image
                src="/icons/chat_icon.png"
                alt="Chat icon"
                width={24}
                height={24}
              />
              <Image
                src="/icons/twitter_logo.png"
                alt="Chat icon"
                width={24}
                height={21}
              />
              <Image
                src="/icons/instagram_logo.png"
                alt="Chat icon"
                width={21}
                height={21}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white">Our Services</h3>
            <div className="flex flex-col gap-2">
              {servicesLists.map((item) => (
                <p key={item} className="text-lg text-white">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white">Industry Sectors</h3>
            <div className="flex flex-col gap-2">
              {industryLists.map((item) => (
                <p key={item} className="text-lg text-white">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white">Useful Links</h3>
            <div className="flex flex-col gap-2">
              {usefulLinks.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="text-lg text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[1px] bg-white" />
          <p className="text-white text-base py-8">
            Copyright © 2024 | Alright reserved by{" "}
            <span className="font-medium text-lg">RL Logistics.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
