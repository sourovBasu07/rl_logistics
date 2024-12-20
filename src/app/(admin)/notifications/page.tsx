import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { notificationsData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "containerId", name: "Container ID" },
    { key: "currentProductLocation", name: "Current Product Location" },
    { key: "updatedBy", name: "Updated By" },
    { key: "updateTime", name: "Update Time" },
  ] as { key: keyof (typeof notificationsData)[0]; name: string }[];

  const actions = [
    {
      name: "Checkbox",
      Icon: (
        <input
          type="checkbox"
          className="accent-primary w-5 h-5 cursor-pointer"
        />
      ),
    },
  ];

  return (
    <DashboardStructure title="Notifications">
      <div className="">
        <Table
          data={notificationsData}
          config={config}
          actions={actions}
          serial
        />
      </div>
    </DashboardStructure>
  );
};
export default page;
