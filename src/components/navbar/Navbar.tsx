"use client";

import { navbarOptions } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { MenuIcon } from "@/assets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  const [activePosition, setActivePosition] = useState({
    left: 0,
    width: 0,
    title: "",
  });
  const [isActive, setIsActive] = useState(false);

  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }

    // Cleanup on component unmount or when drawer closes
    return () => {
      document.body.style.overflow = ""; // Always re-enable scroll on cleanup
    };
  }, [isActive]);

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
    <>
      <div className="hidden lg:block bg-white py-6">
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
            <Select>
              <SelectTrigger className="">
                <div className="flex items-center gap-2 border border-primary rounded px-2 py-1">
                  <Image
                    src="/images/cn_flag.svg"
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
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="china">
                  <Image
                    src="/images/cn_flag.svg"
                    alt="nav icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[1.875rem] h-[1.875rem] object-cover"
                  />
                </SelectItem>
                <SelectItem value="bd">
                  <Image
                    src="/images/bd_flag.svg"
                    alt="nav icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[1.875rem] h-[1.875rem] object-cover"
                  />
                </SelectItem>
                <SelectItem value="wirehouse controller">
                  <Image
                    src="/images/us_flag.svg"
                    alt="nav icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[1.875rem] h-[1.875rem] object-cover"
                  />
                </SelectItem>
              </SelectContent>
            </Select>

            <Link href="/book-now">
              <Button style="outline" text="Book Now" />
            </Link>
            <Link href="/track-order">
              <Button text="Track Order" />
            </Link>
          </div>
        </div>
      </div>

      <nav
        className={`flex flex-col gap-9 bg-white font-medium px-5 py-5 duration-500 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MenuIcon onClick={() => setIsActive((prev) => !prev)} />
            <Link href="/" className="w-auto">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={161}
                height={30}
              />
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/icons/user_circle_icon.svg"
                alt="Logo"
                width={28}
                height={28}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/login">
                  <Button
                    style="outline"
                    size="sm"
                    text="User Login"
                    icon="/icons/user_icon.svg"
                  />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin">
                  <Button
                    style="secondary"
                    size="sm"
                    text="Admin Login"
                    icon="/icons/user_circle_icon.svg"
                  />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {isActive && (
          <div className="fixed left-0 top-[4.5rem] w-screen h-[calc(100%-55px)] flex flex-col bg-white mt-12 pb-4 px-8 z-10">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {navbarOptions.map((nav) => (
                <Link
                  key={nav.title}
                  href={nav.link}
                  className={`w-full ${
                    pathname === nav.link
                      ? "bg-[#FCDFE1] text-primary"
                      : "text-neutralBlack"
                  } rounded p-3`}
                  onClick={() => setIsActive(false)}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
            <div className="flex justify-between px-7 py-10">
              <Link href="/book-now">
                <Button style="outline" text="Book Now" />
              </Link>
              <Link href="/track-order">
                <Button text="Track Order" />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-neutralBlack">Login</p>
              <div className="flex gap-6">
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
