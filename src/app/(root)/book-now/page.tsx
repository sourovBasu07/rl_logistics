import Breadcrumbs from "@/components/Breadcrumbs";
import BookingForm from "@/components/forms/BookingForm";

const page = () => {
  return (
    <div className="container">
      <Breadcrumbs title="Book Now" pageName="Book now" />
      <div className="">
        <BookingForm />
      </div>
    </div>
  );
};
export default page;
