"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { informationsNavs, servicesNavs, settingsNavs } from "@/data/adminData";
import { MenuIcon, QrcodeIcon } from "@/assets";

const DashboardStructure = ({
  title,
  label,
  children,
}: {
  title: string;
  label?: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="w-full lg:h-screen flex flex-col px-5 lg:px-8 pt-7 lg:pt-10 overflow-scroll">
        <div className="flex flex-col lg:hidden gap-6">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex items-center gap-3">
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
            <div className="flex items-center gap-3">
              <QrcodeIcon className="!stroke-primary w-5" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-[2rem] h-[2rem] rounded-full border-[2px] border-primary overflow-hidden">
                    <Image
                      src="/images/admin_avatar.jpg"
                      alt="admin avatar"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-dashboardBg">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex bg-[rgba(255,253,253,0.2)] border border-[rgba(74,74,74,0.4)] rounded mb-5">
            <p className="font-semibold text-xs text-[#57585A] px-3 py-2">
              {title}
            </p>
          </div>
        </div>
        <div className="hidden w-full lg:flex justify-between items-start gap-20">
          <div className="w-full flex flex-col gap-10 mb-7">
            <div className="flex bg-[rgba(255,253,253,0.2)] border border-[rgba(74,74,74,0.4)] rounded-[.9375rem]">
              <p className="font-semibold text-[1.375rem] text-[#57585A] px-8 pt-4 pb-3">
                {title}
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#57595C]" />
            {label && (
              <div className="">
                <p className="font-medium text-[2rem] text-neutralBlack">
                  {label}
                </p>
                <div className="w-full h-[1px] bg-[#57595C] mt-4 mb-8" />
              </div>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-dashboardBg">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="">{children}</div>
      </div>

      {isActive && (
        <div className="fixed left-0 top-0 w-screen h-screen flex flex-col bg-white pt-7 pb-4 px-5 z-10 lg:hidden">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex items-center gap-3">
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
            <div className="flex items-center gap-3">
              <QrcodeIcon className="!stroke-primary w-5" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-[2rem] h-[2rem] rounded-full border-[2px] border-primary overflow-hidden">
                    <Image
                      src="/images/admin_avatar.jpg"
                      alt="admin avatar"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-dashboardBg">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-7">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-neutralBlack">Services</p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {servicesNavs.map((nav) => (
                  <Link
                    key={nav.title}
                    href={nav.url}
                    className={`w-full flex items-center gap-2 ${
                      pathname === nav.url
                        ? "bg-[#FCDFE1] text-primary"
                        : "text-neutralBlack"
                    } rounded p-3`}
                    onClick={() => setIsActive(false)}
                  >
                    <nav.Icon
                      className={`w-6 h-auto ${
                        pathname === nav.url
                          ? "stroke-primary"
                          : "stroke-[#0F0F0F]"
                      }`}
                    />

                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-neutralBlack">Information</p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {informationsNavs.map((nav) => (
                  <Link
                    key={nav.title}
                    href={nav.url}
                    className={`w-full flex items-center gap-2 ${
                      pathname === nav.url
                        ? "bg-[#FCDFE1] text-primary"
                        : "text-neutralBlack"
                    } rounded p-3`}
                    onClick={() => setIsActive(false)}
                  >
                    <nav.Icon
                      className={`w-6 h-auto ${
                        pathname === nav.url
                          ? "stroke-primary"
                          : "stroke-[#0F0F0F]"
                      }`}
                    />

                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-neutralBlack">Settings</p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {settingsNavs.map((nav) => (
                  <Link
                    key={nav.title}
                    href={nav.url}
                    className={`w-full flex items-center gap-2 ${
                      pathname === nav.url
                        ? "bg-[#FCDFE1] text-primary"
                        : "text-neutralBlack"
                    } rounded p-3`}
                    onClick={() => setIsActive(false)}
                  >
                    <nav.Icon
                      className={`w-6 h-auto ${
                        pathname === nav.url
                          ? "stroke-primary"
                          : "stroke-[#0F0F0F]"
                      }`}
                    />

                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardStructure;
