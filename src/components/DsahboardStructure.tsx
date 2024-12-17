import Image from "next/image";
import { ReactNode } from "react";

const DashboardStructure = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col px-8 pt-10">
      <div className="w-full flex justify-between items-start gap-20">
        <div className="w-full flex flex-col gap-10">
          <div className="flex bg-[rgba(255,253,253,0.2)] border border-[rgba(74,74,74,0.4)] rounded-[.9375rem]">
            <p className="font-semibold text-[1.375rem] text-[#57585A] px-8 pt-4 pb-3">
              {title}
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#57595C]" />
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <div className="w-[3.75rem] h-[3.75rem] rounded-full border-[2px] border-primary overflow-hidden">
            <Image
              src="/images/admin_avatar.jpg"
              alt="admin avatar"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="">
            <p className="font-semibold text-xl text-[#0F0F0F]">
              Md. Irfan Ahmad
            </p>
            <p className="text-[#0F0F0F]">Super Admin</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default DashboardStructure;
