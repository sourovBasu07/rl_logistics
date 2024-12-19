import { additionalStats, statsData } from "@/data/adminData";
import StatsCard from "./StatsCard";
import { CustomPieChart } from "../charts/PieChart";
import { CustomBarChart } from "../charts/BarChart";
import { CustomAreaChart } from "../charts/AreaChart";

const Stats = () => {
  return (
    <div className="flex flex-col gap-8">
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
        <CustomAreaChart />
      </div>
      <div className="w-full h-[393px]">
        <CustomBarChart />
      </div>
    </div>
  );
};
export default Stats;
