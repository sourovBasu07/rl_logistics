"use client";

import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { ordersData } from "@/data/adminData";
import { useRouter } from "next/navigation";

const OrderDetails = () => {
  const router = useRouter();

  const config = [
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
      key: "senderContactNumber",
      name: "Sender Contact No.",
      visibleForMobile: false,
    },
  ] as {
    key: keyof (typeof ordersData)[0];
    name: string;
    visibleForMobile: boolean;
  }[]; // Type Assertion

  const actions = [
    {
      name: "Details",
      Icon: (
        <p className="bg-primary rounded px-4 py-2 text-lg text-white">
          Details
        </p>
      ),
      onClick: (name: string, item: (typeof ordersData)[0]) => {
        console.log(name, item);

        router.push("/order-details");
      },
    },
  ];

  return (
    <DashboardStructure title="All Orders">
      <div className="w-full">
        <Table data={ordersData} config={config} actions={actions} serial />
      </div>
    </DashboardStructure>
  );
};
export default OrderDetails;
