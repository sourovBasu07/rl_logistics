import { CheckIcon, DeleteIcon, EditIcon } from "@/assets";
import DashboardStructure from "@/components/DashboardStructure";
import Table from "@/components/shared/Table";
import { containersData } from "@/data/adminData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/shared/Button";

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
      Icon: (
        <Dialog>
          <DialogTrigger asChild>
            <EditIcon />
          </DialogTrigger>
          <DialogContent className="w-full max-w-[900px] flex flex-col bg-dashboardBg pb-12">
            <DialogHeader>
              <DialogTitle hidden>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div className="">
              <p className="font-medium text-[2rem] text-neutralBlack">
                Update Container Location
              </p>
              <div className="w-full h-[1px] bg-[#57595C] mt-4 mb-8" />
            </div>
            <div className={`flex items-center gap-7 mb-16`}>
              <label className="font-medium text-lg text-[#2C2C2C] whitespace-nowrap">
                Current Product Location *
              </label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">China</SelectItem>
                  <SelectItem value="manager">Bangladesh</SelectItem>
                  <SelectItem value="wirehouse controller">India</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex self-end">
              <Button text="Update Now" />
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
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
