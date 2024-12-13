import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/shared/Button";

const page = () => {
  return (
    <div className="container flex flex-col items-center pb-[300px]">
      <Breadcrumbs title="Track Order" pageName="Track order" />
      <SectionTitle
        name="Your order information"
        title="Enter the Consignment No."
        center
        className="w-full"
      />
      <div className="w-[700px] flex items-center gap-4 mx-auto">
        <input
          type="text"
          placeholder="Enter your booking number.."
          className="w-full border-[0.4px] border-[rgba(77,77,77,0.8)] rounded p-[.625rem]"
        />
        <Button text="Track Order" />
      </div>
    </div>
  );
};
export default page;
