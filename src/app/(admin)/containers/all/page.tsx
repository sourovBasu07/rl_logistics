import { DeleteIcon, EditIcon } from "@/assets";
import DashboardStructure from "@/components/DsahboardStructure";
import Table from "@/components/shared/Table";
import { containersData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "containerId", name: "Container ID" },
    { key: "currentProductLocation", name: "Current Product Location" },
    { key: "updatedBy", name: "Updated By" },
    { key: "empContactNumber", name: "Emp Contact Number" },
  ] as { key: keyof (typeof containersData)[0]; name: string }[];

  const actions = [
    {
      name: "Edit",
      Icon: <EditIcon />,
    },
    {
      name: "Delete",
      Icon: <DeleteIcon />,
    },
  ];

  return (
    <DashboardStructure title="Containers">
      <div className="min-w-full">
        <Table data={containersData} config={config} actions={actions} serial />
      </div>
    </DashboardStructure>
  );
};
export default page;
