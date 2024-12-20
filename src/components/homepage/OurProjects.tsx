"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
      <div className="h-[800px] hidden lg:grid grid-rows-6 grid-flow-col gap-4">
        {images.map((image, index: number) => (
          <div key={index} className={`relative ${image.area} group`}>
            <Image
              src={image.image}
              alt="Image"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-full object-cover`}
            />
            <div className="absolute inset-0 w-full h-full rounded-[0.375rem] duration-500 group-hover:bg-black/30" />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {images.map((image, index: number) => (
              <CarouselItem key={index}>
                <div key={index} className={`relative ${image.area} group`}>
                  <Image
                    src={image.image}
                    alt="Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`w-full h-[240px] object-cover`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};
export default OurProjects;
