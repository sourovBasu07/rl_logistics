import Breadcrumbs from "@/components/Breadcrumbs";
import BookingForm from "@/components/forms/BookingForm";

const page = () => {
  return (
    <div className="container">
      <Breadcrumbs title="Book Now" pageName="Book now" />
      <BookingForm />
    </div>
  );
};
export default page;
