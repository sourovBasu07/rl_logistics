import DashboardStructure from "@/components/DashboardStructure";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <DashboardStructure title="Add Employee" label="Add Container">
      <div className="flex flex-col items-center gap-16 pb-16">
        <div className="w-full max-w-[1050px] grid grid-cols-2 gap-x-[150px] gap-y-6">
          <Input
            style="employee"
            label="Container ID"
            placeholder="Enter id..."
            className="w-full"
          />
          <div className={`flex flex-col gap-3`}>
            <label className="font-medium text-lg text-[#2C2C2C]">Model</label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A1">A1</SelectItem>
                <SelectItem value="B1">B1</SelectItem>
                <SelectItem value="C1">C1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            style="employee"
            label="Ports Available"
            placeholder="Type here..."
            className="w-full"
          />
          <Input
            style="employee"
            label="Status"
            placeholder="Status"
            className="w-full"
          />
          <div className={`flex flex-col gap-3`}>
            <label className="font-medium text-lg text-[#2C2C2C]">
              Medium of transportation
            </label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Here" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plane">Plane</SelectItem>
                <SelectItem value="ship">Ship</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className={`flex flex-col gap-3`}>
            <label className="font-medium text-lg text-[#2C2C2C]">
              Location
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
          <Input
            style="employee"
            label="Products Inside"
            placeholder="Type here..."
            className="w-full"
          />
        </div>
        <Button text="Add Container" className="w-[280px]" />
      </div>
    </DashboardStructure>
  );
};
export default page;
