"use client";

import { DeleteIcon } from "@/assets";
import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { customerData } from "@/data/adminData";

const page = () => {
  const config = [
    { key: "userName", name: "User Name", visibleForMobile: true },
    { key: "emailPhone", name: "Email/Phone", visibleForMobile: true },
    {
      key: "status",
      name: "Status",
      visibleForMobile: true,
      modify: (data: string) => {
        return (
          <p
            className={`w-max mx-auto rounded text-lg px-4 py-1 ${
              data === "Online"
                ? "lg:border border-[#09FF00] text-[#00FF2F]"
                : "lg:border border-primary text-primary"
            }`}
          >
            {data}
          </p>
        );
      },
    },
  ] as {
    key: keyof (typeof customerData)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  const actions = [
    {
      name: "Delete",
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
