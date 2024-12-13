import Breadcrumbs from "@/components/Breadcrumbs";
import HowItWorks from "@/components/homepage/HowItWorks";
import Industries from "@/components/homepage/Industries";
import OurTeam from "@/components/OurTeam";

const page = () => {
  return (
    <div className="">
      <Breadcrumbs title="About Us" pageName="About us" />
      <Industries />
      <HowItWorks />
      <OurTeam />
    </div>
  );
};
export default page;
