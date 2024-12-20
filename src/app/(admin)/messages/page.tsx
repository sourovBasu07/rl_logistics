"use client";

import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { messagesData } from "@/data/adminData";

const page = () => {
  const config = [
    {
      key: "name",
      name: "Name",
      visibleForMobile: false,
    },
    { key: "email", name: "Email Address", visibleForMobile: true },
    { key: "phone", name: "Phone Number", visibleForMobile: true },
    {
      key: "subject",
      name: "Subject",
      visibleForMobile: false,
      modify: (data: string) => {
        return (
          <p className="max-w-[150px] text-left whitespace-normal">{data}</p>
        );
      },
    },
    {
      key: "message",
      name: "Message",
      visibleForMobile: true,
    },
  ] as {
    key: keyof (typeof messagesData)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  const actions = [
    {
      name: "View",
      Icon: (
        <input
          type="checkbox"
          className="accent-primary w-5 h-5 cursor-pointer"
        />
      ),
    },
  ];

  return (
    <DashboardStructure title="Messages">
      <div className="">
        <Table data={messagesData} config={config} actions={actions} serial />
      </div>
    </DashboardStructure>
  );
};
export default page;
