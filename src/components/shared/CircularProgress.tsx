import React from "react";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct = 100 }: { color: string; pct?: number }) => {
  const r = 30; // Adjusted radius for 64px overall size
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={32}
      cy={32}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={"6px"} // Adjusted stroke width
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({
  percentage,
  circleTextColor,
}: {
  percentage: number;
  circleTextColor: string;
}) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fill={circleTextColor}
      fontSize={"0.8em"} // Adjusted font size for smaller size
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({
  percentage = 50,
  circleBackColor = "#006ED3",
  circleTopColor = "#FFFFFF",
  circleTextColor = "#FFFFFF",
}: {
  percentage: number;
  circleBackColor: string;
  circleTopColor: string;
  circleTextColor: string;
}) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={64} height={64}>
      <g transform={`rotate(-90 ${"32 32"})`}>
        <Circle color={circleBackColor} />
        <Circle color={circleTopColor} pct={pct} />
      </g>
      <Text circleTextColor={circleTextColor} percentage={pct} />
    </svg>
  );
};

const CircularProgress = ({
  percentage,
  circleBackColor,
  circleTopColor,
  circleTextColor,
}: {
  percentage: number;
  circleBackColor: string;
  circleTopColor: string;
  circleTextColor: string;
}) => {
  return (
    <Pie
      percentage={percentage}
      circleBackColor={circleBackColor}
      circleTopColor={circleTopColor}
      circleTextColor={circleTextColor}
    />
  );
};
export default CircularProgress;
