import { navbarOptions } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";

const Navbar = () => {
  return (
    <div className="bg-white py-6">
      <div className="container flex justify-between items-center">
        <div className="">
          <Image src="/images/logo.png" alt="Logo" width={194} height={36} />
        </div>
        <div className="flex items-center gap-12">
          {navbarOptions.map((nav) => (
            <Link key={nav.link} href={nav.link}>
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border border-primary rounded px-2 py-1">
            <Image
              src="/icons/nav_icon.png"
              alt="nav icon"
              width={30}
              height={30}
            />
            <Image
              src="/icons/arrow_down_icon.png"
              alt="arrow down"
              width={10}
              height={5}
            />
          </div>
          <Button style="outline" text="Book Now" />
          <Button text="Track Order" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
