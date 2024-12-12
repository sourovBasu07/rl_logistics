import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Button from "../shared/Button";

const Explore = () => {
  return (
    <section className="container flex items-center gap-24 py-28">
      <div className="flex flex-col items-start gap-16">
        <SectionTitle
          name="Explore Tutorial"
          title="Check out our tutorial to book our services"
          description="Reliable logistics and transport solutions ensuring timely delivery, cost-efficiency, and seamless supply chain management. "
        />
        <Button text="Book Now" />
      </div>

      <div className="relative">
        <Image
          src="/images/explore_image.jpeg"
          alt="Explore image"
          width={600}
          height={300}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex justify-center items-center rounded-full bg-primary">
          <Image
            src="/icons/play_circle.svg"
            alt="Play button"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};
export default Explore;
