"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
const chartData = [
  { month: "January", thisMonth: 5000, lastMonth: 2500 },
  { month: "February", thisMonth: 10000, lastMonth: 12000 },
  { month: "March", thisMonth: 15000, lastMonth: 11000 },
  { month: "April", thisMonth: 10000, lastMonth: 15000 },
  { month: "May", thisMonth: 20000, lastMonth: 18000 },
  { month: "June", thisMonth: 25000, lastMonth: 20000 },
];

const chartConfig = {
  thisMonth: {
    label: "This month",
    color: "#4169E1",
  },
  lastMonth: {
    label: "Last month",
    color: "#FF4F79",
  },
} satisfies ChartConfig;

export function CustomAreaChart() {
  return (
    <Card className="w-full bg-[#FDF1F1]">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full bg-[#FDF1F1]">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <defs>
              {/* Gradient for Solid Line */}
              <linearGradient id="solidGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(65, 105, 225, 0.12)" />
                <stop offset="100%" stopColor="rgba(65, 105, 225, 0.01)" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <YAxis
              domain={[0, 25000]} // Keeps 0 in the range
              ticks={[5000, 10000, 15000, 20000, 25000]} // Specifies the ticks
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="thisMonth"
              type="natural"
              fill="url(#solidGradient)" // Reference the gradient
              fillOpacity={0.4}
              stroke="#4169E1"
              strokeWidth={3}
              stackId="a"
            />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#FF4F79"
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={0.3}
              fill="transparent"
            />
            {/* <Area
              dataKey="desktop"
              type="natural"
              fill="#FF4F79"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            /> */}
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
