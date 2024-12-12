import Breadcrumbs from "@/components/Breadcrumbs";
import DeliveryProcess from "@/components/services/DeliveryProcess";
import OurServices from "@/components/services/OurServices";

const page = () => {
  return (
    <div className="">
      <Breadcrumbs title="Our Services" pageName="Our services" />
      <OurServices />
      <DeliveryProcess />
    </div>
  );
};
export default page;
