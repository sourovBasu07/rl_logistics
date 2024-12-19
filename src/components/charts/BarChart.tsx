"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 186, mobile: 80 },
  { month: "August", desktop: 214, mobile: 140 },
  { month: "September", desktop: 305, mobile: 200 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#333333",
  },
  mobile: {
    label: "Mobile",
    color: "#F04A4A",
  },
} satisfies ChartConfig;

export function CustomBarChart() {
  return (
    <Card className="w-full h-[393px] shadow-[0_4px_20px_0_rgba(91, 71, 188, 0.3)]">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[393px]">
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <ResponsiveContainer height={250}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                hide
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="#333333" radius={4} />
              <Bar dataKey="mobile" fill="#F04A4A" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
