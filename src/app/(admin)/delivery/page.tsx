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
    { key: "containerId", name: "Container ID" },
    { key: "currentProductLocation", name: "Current Product Location" },
    { key: "updatedBy", name: "Updated By" },
    { key: "empContactNumber", name: "Emp Contact Number" },
  ] as { key: keyof (typeof containersData)[0]; name: string }[];

  const actions = [
    {
      name: "Email",
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
    { key: "bookingId", name: "Booking Id" },
    { key: "containerId", name: "Container Id" },
    { key: "bookingDate", name: "Booking Date" },
    { key: "senderCountry", name: "Sender Country" },
    { key: "receiverCountry", name: "Receiver Country" },
    { key: "deliveryDate", name: "Delivery Date" },
    { key: "productLocation", name: "Product Location" },
    { key: "updatedBy", name: "Updated By" },
    { key: "receiverContactNumber", name: "Receiver Contact No." },
  ] as { key: keyof (typeof deliveryData)[0]; name: string }[]; // Type Assertion

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
                <div className="bg-primary rounded px-4 py-3 cursor-pointer">
                  <Filtericon />
                </div>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[1100px] bg-dashboardBg">
                <DialogHeader>
                  <DialogTitle hidden>Edit profile</DialogTitle>
                </DialogHeader>
                <div className="">
                  <p className="font-medium text-[2rem] text-neutralBlack">
                    Filter your data
                  </p>
                  <div className="w-full h-[1px] bg-[#57595C] mt-4 mb-8" />
                </div>
                <DateFilter />
                <div className="w-full flex justify-end">
                  <Button text="Filter Now" className="my-16" />
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
          className="w-max flex items-center gap-2 bg-primary rounded mx-auto px-7 py-3 cursor-pointer"
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
