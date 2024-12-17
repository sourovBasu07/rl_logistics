import { DeleteIcon } from "@/assets";
import DashboardStructure from "@/components/DsahboardStructure";
import Table from "@/components/shared/Table";
import { customerData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "userName", name: "User Name" },
    { key: "emailPhone", name: "Email/Phone" },
    { key: "status", name: "Status" },
  ] as { key: keyof (typeof customerData)[0]; name: string }[]; // Type Assertion

  const actions = [
    {
      name: "Edit",
      Icon: <DeleteIcon />,
    },
  ];

  return (
    <DashboardStructure title="Customers">
      <div className="min-w-full">
        <Table data={customerData} config={config} actions={actions} serial />
      </div>
    </DashboardStructure>
  );
};
export default page;
