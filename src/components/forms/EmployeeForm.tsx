import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EmployeeForm = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full max-w-[1050px] grid grid-cols-2 gap-x-[150px] gap-y-6">
        <Input
          style="employee"
          label="Employee ID"
          placeholder="Enter id..."
          className="w-full"
        />
        <Input
          style="employee"
          label="Full Name"
          placeholder="Enter name..."
          className="w-full"
        />
        <Input
          style="employee"
          label="Email Address"
          placeholder="Enter email..."
          className="w-full"
        />
        <Input
          style="employee"
          label="Phone Number"
          placeholder="Enter number..."
          className="w-full"
        />
        <Input
          style="employee"
          label="Country"
          placeholder="Enter country..."
          className="w-full"
        />
        <Input
          style="employee"
          label="Password"
          placeholder="Enter password..."
          className="w-full"
        />
        <div className={`flex flex-col gap-3`}>
          <label className="font-medium text-lg text-[#2C2C2C]">Role</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select Here" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="wirehouse controller">
                Wirehouse Controller
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button text={buttonText} className="w-[280px]" />
    </div>
  );
};
export default EmployeeForm;
