"use client";

import DashboardStructure from "@/components/DsahboardStructure";
import Table from "@/components/shared/Table";
import { ordersData } from "@/data/adminData";
import { useRouter } from "next/navigation";

const OrderDetails = () => {
  const router = useRouter();

  const config = [
    { key: "bookingId", name: "Booking Id" },
    { key: "containerId", name: "Container Id" },
    { key: "bookingDate", name: "Booking Date" },
    { key: "senderCountry", name: "Sender Country" },
    { key: "receiverCountry", name: "Receiver Country" },
    { key: "deliveryDate", name: "Delivery Date" },
    { key: "productLocation", name: "Product Location" },
    { key: "updatedBy", name: "Updated By" },
    { key: "senderContactNumber", name: "Sender Contact No." },
  ] as { key: keyof (typeof ordersData)[0]; name: string }[]; // Type Assertion

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
