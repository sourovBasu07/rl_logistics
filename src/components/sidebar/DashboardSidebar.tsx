"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookingIcon,
  ContainerIcon,
  CustomerIcon,
  DashboardIcon,
  DeliveryIcon,
  EmployeeIcon,
  MessageIcon,
  NotificationIcon,
  OrdersIcon,
  ReportIcon,
  SettingsIcon,
} from "@/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Booking",
    url: "/booking",
    icon: BookingIcon,
  },
  {
    title: "Container",
    url: "/container",
    icon: ContainerIcon,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: OrdersIcon,
  },
  {
    title: "Delivery",
    url: "/delivery",
    icon: DeliveryIcon,
  },
  {
    title: "Report",
    url: "/report",
    icon: ReportIcon,
  },
  {
    title: "Message",
    url: "/message",
    icon: MessageIcon,
  },
  {
    title: "Notification",
    url: "/notification",
    icon: NotificationIcon,
  },
  {
    title: "Customer",
    url: "/customer",
    icon: CustomerIcon,
  },
  {
    title: "All Employee",
    url: "/employee",
    icon: EmployeeIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Sidebar collapsible="none" className="bg-white">
      <SidebarContent>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[218px] h-10 mt-10 pl-7"
        />
        <SidebarGroup>
          <SidebarGroupLabel className="pt-7"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2 pl-7 pr-10">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`w-[218px] rounded-lg ${
                    pathname === item.url ? "bg-[#FCDFE1] text-primary" : ""
                  } p-3`}
                >
                  <SidebarMenuButton asChild className="">
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 `}
                    >
                      <div className="">
                        <item.icon
                          className={`w-6 h-auto ${
                            pathname === item.url
                              ? "stroke-primary"
                              : "stroke-[#0F0F0F]"
                          }`}
                        />
                      </div>
                      <p
                        className={`font-medium text-base ${
                          pathname === item.url
                            ? "text-primary"
                            : "text-[#0F0F0F]"
                        }`}
                      >
                        {item.title}
                      </p>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;