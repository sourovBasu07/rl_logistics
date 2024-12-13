import Image from "next/image";
import SectionTitle from "../SectionTitle";

const images = [
  {
    image: "/images/image_1.jpeg",
    area: "row-span-3",
  },
  {
    image: "/images/image_2.png",
    area: "row-span-3",
  },
  {
    image: "/images/image_3.jpeg",
    area: "row-span-2",
  },
  {
    image: "/images/image_4.png",
    area: "row-span-2",
  },
  {
    image: "/images/image_6.jpeg",
    area: "row-span-2 col-span-2",
  },
  {
    image: "/images/image_5.jpeg",
    area: "row-span-4",
  },
];

const OurProjects = () => {
  return (
    <section className="container flex flex-col items-center gap-16 py-24">
      <SectionTitle
        name="Our Project"
        title="Optimizing supply chains with data analytics"
        center
        className="w-[1000px] max-w-full"
      />
      <div className="h-[800px] grid grid-rows-6 grid-flow-col gap-4">
        {images.map((image, index: number) => (
          <div key={index} className={`${image.area}`}>
            <Image
              src={image.image}
              alt="Image"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-full object-cover`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurProjects;
