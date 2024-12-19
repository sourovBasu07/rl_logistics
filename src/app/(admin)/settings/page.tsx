import { CheckIcon, DeleteIcon, EditIcon } from "@/assets";
import DashboardStructure from "@/components/DsahboardStructure";
import Table from "@/components/shared/Table";
import { settingsData } from "@/data/adminData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/shared/Button";
import EmployeeForm from "@/components/forms/EmployeeForm";

const page = () => {
  const config = [
    { key: "empName", name: "Emp Name" },
    { key: "phone", name: "Phone" },
    { key: "country", name: "Country" },
  ] as { key: keyof (typeof settingsData)[0]; name: string }[];

  const actions = [
    {
      name: "Delete",
      Icon: (
        <Dialog>
          <DialogTrigger asChild>
            <DeleteIcon />
          </DialogTrigger>
          <DialogContent className="w-full max-w-[900px] bg-dashboardBg">
            <DialogHeader>
              <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-8 bg-dashboardBg">
              <p className="font-medium text-4xl text-neutralBlack mb-3">
                Warning Message
              </p>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-[5px] border-primary">
                <CheckIcon />
              </div>
              <p className="font-medium text-4xl text-neutralBlack">
                Are you sure you want to remove?
              </p>
              <div className="flex gap-10">
                <Button style="outline" text="No" />
                <Button text="Yes" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      name: "Edit",
      Icon: (
        <Dialog>
          <DialogTrigger asChild>
            <EditIcon />
          </DialogTrigger>
          <DialogContent className="w-full max-w-[1100px] bg-dashboardBg">
            <DialogHeader>
              <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div className="">
              <p className="font-medium text-[2rem] text-neutralBlack">
                Filter your data
              </p>
              <div className="w-full h-[1px] bg-[#57595C] mt-4 mb-8" />
            </div>
            <EmployeeForm buttonText="Update Now" />
          </DialogContent>
        </Dialog>
      ),
    },
  ];

  return (
    <DashboardStructure title="Settings" label="Manage Employee">
      <div className="">
        <Table data={settingsData} config={config} actions={actions} serial />
      </div>
    </DashboardStructure>
  );
};
export default page;
