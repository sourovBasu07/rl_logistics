"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Calculate the total visitors for percentages
const totalVisitors = 40 + 32 + 28; // Sum up the visitors from chartData
const chartData = [
  {
    browser: "Product",
    visitors: 40,
    percent: ((40 / totalVisitors) * 100).toFixed(1), // Calculate percentage
    fill: "#F04A4A",
  },
  {
    browser: "Degrowth",
    visitors: 32,
    percent: ((32 / totalVisitors) * 100).toFixed(1), // Calculate percentage
    fill: "#333333",
  },
  {
    browser: "Growth",
    visitors: 28,
    percent: ((28 / totalVisitors) * 100).toFixed(1), // Calculate percentage
    fill: "#FFE7E7",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Product: {
    label: "Product",
    color: "#F04A4A",
  },
  Degrowth: {
    label: "Degrowth",
    color: "#333333",
  },
  Growth: {
    label: "Growth",
    color: "#FFE7E7",
  },
} satisfies ChartConfig;

export function CustomPieChart() {
  return (
    <Card className="min-w-[380px] flex flex-col bg-[url('/images/chart_bg.jpg')] bg-cover bg-opacity-10 backdrop-blur-lg">
      <div className="absolute inset-0 bg-white/40 -z-10" />
      <CardHeader className="pb-0">
        <CardTitle></CardTitle>
        <CardDescription>
          <div className="w-full flex justify-between items-center">
            <div className="">
              <p className="text-sm text-black">Servies Time</p>
              <p className="text-xs text-black opacity-50">
                From 1-6 Dec, 2021
              </p>
            </div>
            <p className="bg-[#FBFCFE] px-4 py-2 text-sm text-[#5A6ACF]">
              View Report
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="!bg-[#0E132F]"
                  formatter={(value, name, props) => (
                    <p className="w-max text-white">
                      <strong>{name} </strong>
                      {props.payload.percent}%
                    </p>
                  )}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />

            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
