import { servicesData } from "@/data";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <section className="container pb-[150px]">
      <div className="flex flex-col lg:flex-row gap-5">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};
export default OurServices;
