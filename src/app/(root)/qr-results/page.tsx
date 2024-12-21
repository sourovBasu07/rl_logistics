"use client";

import { CheckIcon } from "@/assets";
import Button from "@/components/shared/Button";
import Table from "@/components/shared/Table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deliveryData } from "@/data/adminData";
import { useRouter } from "next/navigation";

const QrResults = () => {
  const router = useRouter();

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
      Icon: <Button text="Details" size="medium" />,
      onClick: (name: string, item: (typeof deliveryData)[0]) => {
        console.log(name, item);

        router.push("/delivery-details");
      },
    },
    {
      name: "Clear",
      Icon: (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="medium"
              style="outline"
              text="Clear"
              className="border border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-primary"
            />
          </DialogTrigger>
          <DialogContent className="w-full max-w-[900px] bg-dashboardBg">
            <DialogHeader>
              <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-8 bg-dashboardBg">
              <p className="font-medium text-4xl text-neutralBlack mb-3">
                Warning Message
              </p>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-[5px] border-primary">
                <CheckIcon />
              </div>
              <p className="font-medium text-4xl text-neutralBlack">
                Are you sure you want to remove?
              </p>
              <div className="flex gap-10">
                <Button style="outline" text="No" />
                <Button text="Yes" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-14 px-[3.75rem]">
      <h2 className="text-black text-center">Scan Results</h2>
      <div className="">
        <Table
          data={deliveryData}
          config={deliveryConfig}
          actions={deliveryActions}
          serial
        />
      </div>
    </div>
  );
};
export default QrResults;
