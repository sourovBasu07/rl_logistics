import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import moment from "moment";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";

const DateFilter = () => {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();

  return (
    <div className="w-full max-w-[1050px] grid grid-cols-2 gap-x-5 lg:gap-x-[150px] gap-y-5 lg:gap-y-6">
      <div className="flex flex-col gap-3 pt-[.625rem] border-b border-b-borderColor">
        <p className="font-medium text-lg text-[#2C2C2C]">From</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-between text-left font-normal",
                !fromDate && "text-[#808080] px-0"
              )}
            >
              {fromDate ? (
                moment(fromDate).format("DD/MM/YY")
              ) : (
                <span>DD/MM/YY</span>
              )}
              <CalendarIcon color="#808080" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={fromDate}
              onSelect={setFromDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3 pt-[.625rem] border-b border-b-borderColor">
        <p className="font-medium text-lg text-[#2C2C2C]">To</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-between bg-transparent text-left font-normal",
                !toDate && "text-[#808080] !px-0"
              )}
            >
              {toDate ? (
                moment(fromDate).format("DD/MM/YY")
              ) : (
                <span>DD/MM/YY</span>
              )}
              <CalendarIcon color="#808080" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto bg-dashboardBg p-0" align="start">
            <Calendar
              mode="single"
              selected={toDate}
              onSelect={setToDate}
              initialFocus
              className="bg-dashboardBg"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
export default DateFilter;
