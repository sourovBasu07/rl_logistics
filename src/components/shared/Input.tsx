"use client";

import { ReactNode, useRef } from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "textarea" | "iconInput";
  style?: "primary" | "booknow" | "employee";
  required?: boolean;
  labelWidth?: string;
  className?: string;
  Icon?: ReactNode;
};

const Input = ({
  label,
  type = "text",
  style = "primary",
  required = false,
  placeholder = "",
  labelWidth = "160px",
  className,
  Icon,
}: InputProps) => {
  const iconInputRef = useRef<HTMLInputElement | null>(null);

  if (style === "employee") {
    return (
      <div
        className={`flex flex-col gap-3 border-b border-b-[#707070] group focus-within:border-b-black p-[.625rem] ${className}`}
      >
        <label className="font-medium text-lg text-[#2C2C2C]">{label}</label>
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          className="bg-transparent outline-none border-none py-1 text-lg"
        />
      </div>
    );
  }
  if (style === "booknow") {
    if (type === "textarea") {
      return (
        <div className="w-full flex items-start gap-3 border-b border-b-[#707070] p-2 group focus-within:border-b-black">
          <label className={`w-full min-w-[150px] text-lg text-[#2C2C2C]`}>
            {label}
            {required && "*"}
          </label>
          <textarea
            required={required}
            placeholder={placeholder || "Type here..."}
            className="h-[150px] outline-none border-none px-2 py-1"
          />
        </div>
      );
    }
    return (
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-3 border-b border-b-[#707070] p-2 group focus-within:border-b-black">
        <label
          className={`min-w-[${labelWidth}] text-lg text-[#2C2C2C] whitespace-nowrap`}
        >
          {label}
          {required && "*"}
        </label>
        <input
          required={required}
          type={type}
          placeholder={placeholder || "Type here..."}
          className={`flex-1 w-full outline-none border-none px-0 lg:px-2 py-1`}
        />
      </div>
    );
  }

  if (type === "iconInput") {
    return (
      <div
        className={`flex flex-col cursor-text ${className} rounded overflow-hidden`}
        onClick={() => iconInputRef?.current?.focus()}
      >
        <div
          className={`w-full relative flex items-center gap-3 bg-white/80 px-[.625rem] lg:px-[.875rem] py-1 lg:py-[.625rem]`}
        >
          {Icon && Icon}

          <input
            className={`w-full bg-transparent border-none pb-1 focus:outline-none placeholder:-mt-1 placeholder:text-sm placeholder:text-[#555555]`}
            type="text"
            placeholder={placeholder}
            ref={iconInputRef}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="outline-none border-b border-b-[rgba(0,0,0,0.4)] px-2 py-1"
      />
    </div>
  );
};
export default Input;
