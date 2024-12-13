"use client";

import CountUp from "react-countup";

const StatsCard = ({ title, count }: { title: string; count: number }) => {
  if (title === "Satisfied clients")
    return (
      <div className="flex flex-col items-center gap-3 pl-10">
        <CountUp start={1} end={count} delay={0}>
          {({ countUpRef }) => (
            <div className="flex">
              <h2>
                <span ref={countUpRef}></span>K+
              </h2>
            </div>
          )}
        </CountUp>
        <p className="font-medium text-lg text-[#111111]">{title}</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-3 pl-10">
      <CountUp start={1} end={count} delay={0}>
        {({ countUpRef }) => (
          <h2>
            <span ref={countUpRef}>
              <span>
                <h2>0</h2>
              </span>
            </span>{" "}
          </h2>
        )}
      </CountUp>
      <p className="font-medium text-lg text-[#111111]">{title}</p>
    </div>
  );
};
export default StatsCard;
