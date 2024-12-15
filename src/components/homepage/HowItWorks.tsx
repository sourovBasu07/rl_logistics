import { deliveryProcessData } from "@/data";
import SectionTitle from "../SectionTitle";
import DeliveryCard from "../DeliveryCard";

const HowItWorks = () => {
  return (
    <section className="container flex flex-col items-center gap-20 pb-28">
      <SectionTitle
        name="HOW IT WORKS"
        title="How we deliver your parcel"
        description=""
        center
      />
      <div className="flex flex-col lg:flex-row gap-5">
        {deliveryProcessData.map((item) => (
          <DeliveryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
