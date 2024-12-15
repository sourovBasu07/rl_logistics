import Stats from "@/components/dashboard/Stats";
import DashboardStructure from "@/components/DsahboardStructure";

const page = () => {
  return (
    <DashboardStructure title="Dashboard">
      <Stats />
    </DashboardStructure>
  );
};
export default page;
