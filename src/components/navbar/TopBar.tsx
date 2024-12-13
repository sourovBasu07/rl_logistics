import { topbarDetails } from "@/data";
import Button from "../shared/Button";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-white">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-6 divide-x-[1px] divide-black">
          {topbarDetails.map((item) => (
            <div key={item.title} className="flex items-center gap-3 pl-6">
              <Image src={item.icon} alt={item.title} width={24} height={24} />
              <p className="text-[#414141]">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login">
            <Button
              style="outline"
              size="sm"
              text="User Login"
              icon="/icons/user_icon.svg"
            />
          </Link>

          <Link href="/admin">
            <Button
              style="secondary"
              size="sm"
              text="Admin Login"
              icon="/icons/user_circle_icon.svg"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-[0.06rem] bg-[#57595C]" />
    </div>
  );
};
export default TopBar;
