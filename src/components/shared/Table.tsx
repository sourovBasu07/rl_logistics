"use client";

import React, { ElementType, ReactNode } from "react";
import TablePagination, { PaginationType } from "./TablePagination";
// import { bookingData } from "@/data/adminData";
// import { ArrowDownUp } from "lucide-react";
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
    visibleForMobile: boolean;
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
        <table className="w-full table-auto">
          <thead className="min-w-full bg-primary">
            <tr className="w-full bg-primary px-3 py-3 lg:py-4 text-[.625rem] lg:text-lg text-white text-center">
              {serial && data.length > 0 && (
                <th className="hidden lg:table-cell text-center px-4">
                  <div className="flex justify-center gap-1 items-center font-medium">
                    <p>Sl.</p>
                    {/* <ArrowDownUp size={16} /> */}
                  </div>
                </th>
              )}
              {config.map(({ name, visibleForMobile }) => (
                <th
                  key={uuidV4()}
                  className={`bg-primary px-4 py-3 lg:py-4 font-medium text-center ${
                    name.length > 20
                      ? "whitespace-normal lg:whitespace-nowrap"
                      : "whitespace-nowrap "
                  } ${visibleForMobile ? "" : "hidden lg:table-cell"}`}
                >
                  <div className="">
                    <p>{name}</p>
                  </div>
                </th>
              ))}
              {actions.length > 0 ? (
                <th className="text-xs lg:text-base text-center px-4">
                  Actions
                </th>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody className="">
            <tr className="w-full h-0 lg:h-10 border-b border-b-primary text-center"></tr>
            {data.length > 0 &&
              data.map((item, index) => (
                <tr
                  key={uuidV4()}
                  className="px-3 lg:border-b border-b-primary space-x-3 hover:bg-[#D8E7FF]"
                >
                  {serial && data.length > 0 && (
                    <td
                      className={`hidden lg:table-cell px-4 text-center text-[.625rem] lg:text-lg text-neutralBlack`}
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
                      visibleForMobile,
                    }) => {
                      const visibilityClass = visibleForMobile
                        ? ""
                        : "hidden md:table-cell";

                      if (Comp)
                        return (
                          <td key={key.toString()} className={visibilityClass}>
                            <Comp data={item} />
                          </td>
                        );
                      if (item[key] === "") {
                        return (
                          <td key={key.toString()} className={visibilityClass}>
                            <p className="text-center text-neutralBlack">-</p>
                          </td>
                        );
                      }
                      return (
                        <td
                          onClick={() => onClick && onClick(item)}
                          key={key.toString()}
                          className={`${visibilityClass} py-4 text-[10px] lg:text-lg text-neutralBlack ${
                            key === "message"
                              ? "max-w-[100px] lg:max-w-[350px] text-left whitespace-normal"
                              : "text-center whitespace-nowrap"
                          }`}
                        >
                          <div className="clamp-2">
                            {modify?.(String(value || item[key])) ??
                              String(value || item[key])}
                          </div>
                        </td>
                      );
                    }
                  )}
                  {actions.length > 0 ? (
                    <td
                      className={`text-center px-1 lg:px-4 text-sm leading-5`}
                    >
                      <div className="flex justify-center items-center gap-2 lg:gap-4">
                        {actions.map(({ name, Icon, onClick, className }) =>
                          Icon ? (
                            <div
                              className="hidden lg:block cursor-pointer"
                              key={name}
                              onClick={() => onClick && onClick(name, item)}
                            >
                              {Icon}
                            </div>
                          ) : (
                            <p
                              key={name}
                              className={className}
                              onClick={() => onClick && onClick(name, item)}
                            >
                              {name}
                            </p>
                          )
                        )}
                        {actions.map(({ name, onClick, className }) => (
                          <p
                            key={name}
                            className={`block lg:hidden bg-primary rounded-[2px] text-white px-2 py-1 text-[.625rem] cursor-pointer ${className}`}
                            onClick={() => onClick && onClick(name, item)}
                          >
                            {name}
                          </p>
                        ))}
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
