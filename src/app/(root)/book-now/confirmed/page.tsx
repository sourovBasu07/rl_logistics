import { CheckIcon } from "@/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/shared/Button";
import Link from "next/link";

const page = () => {
  return (
    <div className="conrainer flex flex-col items-center pb-24">
      <Breadcrumbs title="Book Now" pageName="Book now" />
      <div className="flex flex-col items-center gap-3 pb-16">
        <div className="w-[4.6875rem] h-[4.6875rem] flex flex-col justify-center items-center rounded-full border-[.3125rem] border-primary">
          <CheckIcon />
        </div>
        <h2 className="">Your booking has been confirmed</h2>
      </div>
      <Link href="/track-order">
        <Button text="Track Order" />
      </Link>
    </div>
  );
};
export default page;
