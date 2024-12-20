import { EditIcon } from "@/assets";
import DashboardStructure from "@/components/DashboardStructure";
// import { TableDemo } from "@/components/shared/CustomTable";
import Table from "@/components/shared/Table";
import { bookingData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "bookingId", name: "Booking Id" },
    { key: "containerId", name: "Container Id" },
    { key: "bookingDate", name: "Booking Date" },
    { key: "senderCountry", name: "Sender Country" },
    { key: "receiverCountry", name: "Receiver Country" },
    { key: "deliveryDate", name: "Delivery Date" },
    { key: "productLocation", name: "Product Location" },
    { key: "status", name: "Status" },
    { key: "senderContactNumber", name: "Sender Contact No." },
  ] as { key: keyof (typeof bookingData)[0]; name: string }[]; // Type Assertion

  const actions = [
    {
      name: "Edit",
      Icon: <EditIcon />,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <DashboardStructure title="Booking">
        <div className="w-full">
          <Table data={bookingData} config={config} actions={actions} serial />
        </div>
      </DashboardStructure>
    </div>
  );
};
export default page;
