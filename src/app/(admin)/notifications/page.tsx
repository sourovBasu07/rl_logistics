import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { notificationsData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "containerId", name: "Container ID", visibleForMobile: true },
    {
      key: "currentProductLocation",
      name: "Product Location",
      visibleForMobile: true,
    },
    { key: "updatedBy", name: "Updated By", visibleForMobile: false },
    { key: "updateTime", name: "Update Time", visibleForMobile: true },
  ] as {
    key: keyof (typeof notificationsData)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  const actions = [
    {
      name: "Done",
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
