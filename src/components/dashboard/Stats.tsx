import { additionalStats, statsData } from "@/data/adminData";
import StatsCard from "./StatsCard";
import { CustomPieChart } from "../charts/PieChart";
import { CustomBarChart } from "../charts/BarChart";

const Stats = () => {
  return (
    <div className="">
      <div className="flex gap-12">
        {statsData.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
        {additionalStats.map((item) => (
          <StatsCard key={item.title} {...item} type="withoutImage" />
        ))}
      </div>
      <div className="flex gap-12">
        <CustomPieChart />
      </div>
      <div className="w-full">
        <CustomBarChart />
      </div>
    </div>
  );
};
export default Stats;
