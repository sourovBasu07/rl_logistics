"use client";

import React, { ElementType, ReactNode } from "react";
import TablePagination, { PaginationType } from "./TablePagination";
// import { bookingData } from "@/data/adminData";
import { ArrowDownUp } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

// type BookingDataType = (typeof bookingData)[0];

// type ConfigType = {
//   name: string;
//   key: string;
//   value?: string;
//   onClick?: (item: BookingDataType) => void;
//   modify?: (value: string) => string;
//   Comp?: ElementType;
// };

// type ActionsType = {
//   name: string;
//   Icon: ElementType;
//   onClick: (name: string, item: BookingDataType) => void;
//   className: string;
//   style: { size: string };
// };

type TableProps<T> = {
  data: T[];
  config: {
    name: string;
    key: keyof T;
    value?: string;
    onClick?: (item: T) => void;
    modify?: (value: string) => string;
    Comp?: ElementType;
  }[];
  pagination?: PaginationType;
  actions?: {
    name: string;
    Icon: ReactNode;
    onClick?: (name: string, item: T) => void;
    className?: string;
  }[];
  showPagination?: boolean;
  serial: boolean;
};

export const Table = <T,>({
  data,
  config = [],
  pagination,
  actions = [],
  showPagination = true,
  serial = true,
}: TableProps<T>) => {
  let serialArr: number[] = [];
  if (data.length > 0)
    serialArr =
      pagination && showPagination
        ? data?.map(
            (_, ind) => ind + 1 + (pagination?.page - 1) * pagination?.limit
          )
        : data?.map((_, ind) => ind + 1);
  return (
    <div className="w-full overflow-auto">
      <div className="w-full overflow-x-auto scrollbar">
        <table className="min-w-full">
          <thead className="min-w-full">
            <tr className="w-full flex justify-center items-center bg-primary py-4 text-lg text-white">
              {serial && data.length > 0 && (
                <th className="text-center px-4">
                  <div className="flex gap-1 items-center font-medium">
                    <p>Sl.</p>
                    <ArrowDownUp size={16} />
                  </div>
                </th>
              )}
              {config.map((column, index: number) => (
                <th
                  key={`${String(column.key)}-${index}`}
                  className="bg-primary min-w-[10rem] font-medium text-center whitespace-nowrap"
                >
                  <div className="">
                    <p>{column.name}</p>
                  </div>
                </th>
              ))}
              {actions.length > 0 ? (
                <th className="text-left px-4 min-w-[2rem] max-w-max">
                  Actions
                </th>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody className="">
            <tr className="w-full h-10 border-b border-b-primary text-center"></tr>
            {data.length > 0 &&
              data.map((item, index) => (
                <tr
                  key={uuidV4()}
                  className="flex justify-center items-center px-3 border-b border-b-primary hover:bg-[#D8E7FF]"
                >
                  {serial && data.length > 0 && (
                    <td
                      className={`px-4 text-center text-lg text-neutralBlack`}
                    >
                      {serialArr[index] ? serialArr[index] : index + 1}
                    </td>
                  )}
                  {config.map(
                    ({
                      key,
                      value,
                      onClick = () => {},
                      modify = () => undefined,
                      Comp,
                    }) => {
                      if (Comp)
                        return (
                          <td key={key.toString()}>
                            <Comp data={item} />
                          </td>
                        );
                      if (item[key] === "") {
                        return (
                          <td key={key.toString()}>
                            <p className="min-w-[10rem] text-center text-neutralBlack">
                              -
                            </p>
                          </td>
                        );
                      }
                      return (
                        <td
                          onClick={() => onClick && onClick(item)}
                          key={key.toString()}
                          className={`min-w-[10rem] max-w-max py-4 text-lg text-neutralBlack text-center whitespace-nowrap ${
                            key === "ID" ||
                            key === "StudentName" ||
                            key === "Category"
                              ? "text-blue"
                              : "text-textBlue"
                          }`}
                        >
                          {modify?.(String(value || item[key])) ??
                            String(value || item[key])}
                        </td>
                      );
                    }
                  )}
                  {actions.length > 0 ? (
                    <td
                      className={`min-w-[2rem] text-center px-4 text-sm leading-5`}
                    >
                      <div className="flex justify-center items-center gap-4">
                        {actions.map(({ name, Icon, onClick, className }) =>
                          Icon ? (
                            <div
                              className=" hover:text-red text-[#64748B] cursor-pointer"
                              key={name}
                              onClick={() => onClick && onClick(name, item)}
                            >
                              {Icon}
                            </div>
                          ) : (
                            <p key={name} className={className}>
                              {name}
                            </p>
                          )
                        )}
                      </div>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {pagination && showPagination ? (
        <div className="w-full ">
          {data.length > 0 ? (
            <TablePagination pagination={pagination} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Table;
