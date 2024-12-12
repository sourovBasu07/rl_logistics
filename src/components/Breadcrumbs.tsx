import Image from "next/image";

const Breadcrumbs = ({
  title,
  pageName,
}: {
  title: string;
  pageName: string;
}) => {
  return (
    <div className="w-full flex flex-col items-center py-14">
      <p className="font-semibold text-[2.5rem] leading-[3.5rem] text-black">
        {title}
      </p>
      <div className="flex items-center gap-2">
        <p className="font-light text-black">Home</p>
        <Image
          src="/icons/right_arrow_icon.png"
          alt="right arrow icon"
          width={7}
          height={12}
          className="mt-1"
        />
        <p className="font-medium text-black">{pageName}</p>
      </div>
    </div>
  );
};
export default Breadcrumbs;
