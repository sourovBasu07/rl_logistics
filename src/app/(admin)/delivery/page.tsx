"use client";

import {
  CheckIcon,
  Filtericon,
  MailIcon,
  QrcodeIcon,
  SearchIcon,
} from "@/assets";
import DashboardStructure from "@/components/DashboardStructure";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DateFilter from "@/components/filters/DateFilter";
import Table from "@/components/shared/Table";
import { containersData, deliveryData } from "@/data/adminData";
import { useRouter } from "next/navigation";

const Delivery = () => {
  const router = useRouter();
  const config = [
    { key: "containerId", name: "Container ID", visibleForMobile: true },
    {
      key: "currentProductLocation",
      name: "Product Location",
      visibleForMobile: true,
    },
    { key: "updatedBy", name: "Updated By", visibleForMobile: true },
    {
      key: "empContactNumber",
      name: "Emp Contact Number",
      visibleForMobile: false,
    },
  ] as {
    key: keyof (typeof containersData)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  const actions = [
    {
      name: "Message",
      Icon: (
        <Dialog>
          <DialogTrigger>
            <MailIcon />
          </DialogTrigger>
          <DialogContent className="w-full max-w-[900px] bg-dashboardBg">
            <DialogHeader>
              <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-8 bg-dashboardBg">
              <p className="font-medium text-4xl text-neutralBlack mb-3">
                Message
              </p>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-[5px] border-primary">
                <CheckIcon />
              </div>
              <p className="font-medium text-4xl text-neutralBlack">
                Your message delivery completed
              </p>
              <Button text="Done" />
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
  ];

  const deliveryConfig = [
    { key: "bookingId", name: "Booking Id", visibleForMobile: true },
    { key: "containerId", name: "Container Id", visibleForMobile: true },
    { key: "bookingDate", name: "Booking Date", visibleForMobile: false },
    { key: "senderCountry", name: "Sender Country", visibleForMobile: false },
    {
      key: "receiverCountry",
      name: "Receiver Country",
      visibleForMobile: false,
    },
    { key: "deliveryDate", name: "Delivery Date", visibleForMobile: false },
    {
      key: "productLocation",
      name: "Product Location",
      visibleForMobile: true,
    },
    { key: "updatedBy", name: "Updated By", visibleForMobile: false },
    {
      key: "receiverContactNumber",
      name: "Receiver Contact No.",
      visibleForMobile: false,
    },
  ] as {
    key: keyof (typeof deliveryData)[0];
    name: string;
    visibleForMobile: true;
  }[]; // Type Assertion

  const deliveryActions = [
    {
      name: "Details",
      Icon: (
        <p className="bg-primary rounded px-4 py-2 text-lg text-white">
          Details
        </p>
      ),
      onClick: (name: string, item: (typeof deliveryData)[0]) => {
        console.log(name, item);

        router.push("/delivery-details");
      },
    },
  ];

  return (
    <DashboardStructure title="For Delivery">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-end items-center gap-[.875rem]">
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-primary rounded px-2 lg:px-4 py-[.625rem] lg:py-3 cursor-pointer">
                  <Filtericon />
                </div>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[1100px] bg-dashboardBg">
                <DialogHeader>
                  <DialogTitle hidden>Edit profile</DialogTitle>
                </DialogHeader>
                <div className="">
                  <p className="font-medium text-sm lg:text-[2rem] text-neutralBlack">
                    Filter your data
                  </p>
                  <div className="w-full h-[1px] bg-[#57595C] mt-4 lg:mb-8" />
                </div>
                <div className="">
                  <DateFilter />
                </div>
                <div className="w-full flex justify-end">
                  <Button text="Filter Now" className="mt-7 mb-4 lg:my-16" />
                </div>
              </DialogContent>
            </Dialog>

            <Input
              type="iconInput"
              Icon={<SearchIcon />}
              placeholder="Enter container id"
              className="w-[300px]"
            />
            <Button text="Find Now" />
          </div>
          <Table
            data={containersData}
            config={config}
            actions={actions}
            serial
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-end items-center gap-[.875rem]">
            <Input
              type="iconInput"
              Icon={<SearchIcon />}
              placeholder="Enter container id"
              className="w-[300px]"
            />
            <Button text="Find Now" />
          </div>
          <Table
            data={deliveryData}
            config={deliveryConfig}
            actions={deliveryActions}
            serial
          />
        </div>
        <div
          className="w-max hidden lg:flex items-center gap-2 bg-primary rounded mx-auto px-7 py-3 cursor-pointer"
          onClick={() => router.push("/qr-results")}
        >
          <QrcodeIcon />
          <p className="font-medium text-[2rem] leading-[3rem] text-white">
            Open QR Code
          </p>
        </div>
      </div>
    </DashboardStructure>
  );
};
export default Delivery;
