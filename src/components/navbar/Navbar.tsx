"use client";

import { navbarOptions } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activePosition, setActivePosition] = useState({
    left: 0,
    width: 0,
    title: "",
  });
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeLink =
      navContainerRef.current?.querySelector(`[data-active="true"]`);

    if (activeLink) {
      const parentRect = navContainerRef?.current?.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();

      setActivePosition({
        // @ts-expect-error undefined
        left: activeRect.left - parentRect.left,
        width: activeRect.width,
        title: activeLink.textContent || "",
      });
    }
  }, [pathname]);

  const handleClick = (link: string) => {
    setClickedLink(link);
  };

  return (
    <div className="bg-white py-6">
      <div className="container flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={194} height={36} />
        </div>

        {/* Navigation Links */}
        <div
          className="relative flex items-center gap-12"
          ref={navContainerRef}
        >
          {navbarOptions.map((nav) => (
            <div
              key={nav.link}
              data-active={pathname === nav.link} // Mark the active link
              className="relative"
            >
              <Link
                href={nav.link}
                onClick={() => handleClick(nav.link)}
                data-active={pathname === nav.link}
                className={`block py-1 hover:text-gray-600 transition-opacity duration-700 ${
                  clickedLink === nav.link
                    ? "opacity-0 pointer-events-none"
                    : pathname === nav.link
                    ? "font-semibold text-primary"
                    : "text-black"
                }`}
              >
                {nav.title}
              </Link>
            </div>
          ))}

          {/* Active Underline */}
          <div
            className="absolute h-[3px] bg-gradient-to-r from-[#FF131D] via-[#FF8181] to-[#FFD2D2] transition-all duration-300"
            style={{
              left: `${activePosition.left}px`,
              width: `${activePosition.width}px`,
              bottom: -2, // Adjust as needed to align the underline with the nav links
            }}
          />

          <div
            className="absolute text-primary whitespace-nowrap font-semibold transition-all duration-500"
            style={{
              left: `${activePosition.left}px`,
              width: `${activePosition.width}px`,
              // transform: "translateY(-20%)",
              textAlign: "center",
            }}
          >
            {activePosition.title}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border border-primary rounded px-2 py-1">
            <Image
              src="/icons/nav_icon.png"
              alt="nav icon"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1.875rem] h-[1.875rem] object-cover"
            />
            <Image
              src="/icons/arrow_down_icon.png"
              alt="arrow down"
              width={10}
              height={15}
            />
          </div>
          <Link href="/book-now">
            <Button style="outline" text="Book Now" />
          </Link>
          <Link href="/track-order">
            <Button text="Track Order" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
