import DashboardStructure from "@/components/DsahboardStructure";
import EmployeeForm from "@/components/forms/EmployeeForm";

const page = () => {
  return (
    <DashboardStructure title="Add Employee" label="Add Employee">
      <EmployeeForm buttonText="Add Employee" />
    </DashboardStructure>
  );
};
export default page;
