import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/shared/Button";
import Link from "next/link";

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
      <div className="w-full max-w-[700px] flex flex-col lg:flex-row items-center gap-8 lg:gap-4 mx-auto mt-8 lg:mt-0">
        <input
          type="text"
          placeholder="Enter your booking number.."
          className="w-full border-[0.4px] border-[rgba(77,77,77,0.3)] rounded px-6 py-4 outline-none"
        />
        <Link href="order-details">
          <Button text="Track Order" />
        </Link>
      </div>
    </div>
  );
};
export default page;
