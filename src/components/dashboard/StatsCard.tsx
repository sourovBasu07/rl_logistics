"use client";

import Image from "next/image";
import CircularProgress from "../shared/CircularProgress";

const StatsCard = ({
  type = "withImage",
  title,
  image,
  className,
  ...rest
}: {
  type?: "withImage" | "withoutImage";
  title: string;
  image?: string;
  className?: string;
  percentage: number;
  circleBackColor: string;
  circleTopColor: string;
  circleTextColor: string;
}) => {
  if (type === "withoutImage") {
    return (
      <div className="w-[172px] h-[158px] flex flex-col justify-between bg-[#369FFF] bg-opacity-10 rounded-[1.25rem] px-6 py-8">
        <p className="font-semibold text-xl text-[#696969]">{title}</p>
        <div className="flex justify-between items-center">
          <div className="w-[.3125rem] h-[1.875rem] bg-[#006ED3]" />
          <p className="font-bold text-4xl text-[#006ED3]">
            {rest.percentage}%
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`w-[287px] flex justify-between items-end ${className} rounded-[1.25rem] px-[1.875rem] py-[1.875rem] font-semibold text-xl`}
    >
      <div className="flex flex-col gap-2">
        <p className="">{title}</p>
        <CircularProgress {...rest} />
      </div>
      {image && (
        <Image
          src={image}
          alt="title"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[75px] object-cover"
        />
      )}
    </div>
  );
};
export default StatsCard;
