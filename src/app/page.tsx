import AboutCompany from "@/components/homepage/AboutCompany";
import Cta from "@/components/homepage/Cta";
import Explore from "@/components/homepage/Explore";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import Industries from "@/components/homepage/Industries";
import DeliveryProcess from "@/components/services/DeliveryProcess";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Explore />
      <HowItWorks />
      <Industries />
      <AboutCompany />
      <DeliveryProcess />
      <Cta />
    </div>
  );
};
export default page;
