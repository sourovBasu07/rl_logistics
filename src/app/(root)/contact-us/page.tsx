import Breadcrumbs from "@/components/Breadcrumbs";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <div className="">
      <Breadcrumbs title="Contact Us" pageName="Contact us" />
      <ContactUs />
    </div>
  );
};
export default page;
