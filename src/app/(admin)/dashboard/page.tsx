import Stats from "@/components/dashboard/Stats";
import DashboardStructure from "@/components/DashboardStructure";

const page = () => {
  return (
    <DashboardStructure title="Dashboard">
      <Stats />
    </DashboardStructure>
  );
};
export default page;
