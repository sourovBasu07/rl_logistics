import { EditIcon } from "@/assets";
import DashboardStructure from "@/components/DashboardStructure";
// import { TableDemo } from "@/components/shared/CustomTable";
import Table from "@/components/shared/Table";
import { bookingData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "bookingId", name: "Booking Id", visibleForMobile: true },
    { key: "containerId", name: "Container Id", visibleForMobile: false },
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
    { key: "status", name: "Status", visibleForMobile: true },
    {
      key: "senderContactNumber",
      name: "Sender Contact No.",
      visibleForMobile: false,
    },
  ] as {
    key: keyof (typeof bookingData)[0];
    name: string;
    visibleForMobile: boolean;
  }[]; // Type Assertion

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
