import { additionalStats, statsData } from "@/data/adminData";
import StatsCard from "./StatsCard";
import { CustomPieChart } from "../charts/PieChart";
import { CustomBarChart } from "../charts/BarChart";
import { CustomAreaChart } from "../charts/AreaChart";

const Stats = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row justify-start items-start gap-6">
        <div className="w-full flex lg:flex-col gap-6">
          {statsData.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>
        <div className="w-full flex lg:flex-col gap-6">
          {additionalStats.map((item) => (
            <StatsCard key={item.title} {...item} type="withoutImage" />
          ))}
        </div>
        <div className="hidden w-full lg:flex items-start gap-6">
          <CustomPieChart />
          <CustomAreaChart />
        </div>
      </div>

      <div className="w-full h-[393px]">
        <CustomBarChart />
      </div>
    </div>
  );
};
export default Stats;
