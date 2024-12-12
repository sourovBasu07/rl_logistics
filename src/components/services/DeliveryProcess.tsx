import { parcelDeliveryProcessData } from "@/data";
import SectionTitle from "../SectionTitle";
import DeliveryCard from "./DeliveryCard";

const DeliveryProcess = () => {
  return (
    <div className="bg-sectionBg">
      <div className="container flex flex-col items-center gap-10">
        <SectionTitle
          name="Our work process"
          title="How we delivery your parcel"
          description=""
          center
        />
        <div className="w-full flex justify-between relative my-10">
          {parcelDeliveryProcessData.map((item, index: number) => (
            <DeliveryCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DeliveryProcess;
