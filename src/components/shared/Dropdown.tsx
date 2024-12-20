"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [selected]);

  useEffect(() => {
    // Close the dropdown when the user clicks outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <label className="text-primary" htmlFor=""></label>
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          className={`py-2 pl-6 pr-4 rounded-full border flex justify-between items-center cursor-pointer`}
        >
          <div className="flex items-center gap-2 border border-primary rounded px-2 py-1">
            <Image
              src="/icons/nav_icon.png"
              alt="nav icon"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1.875rem] h-[1.875rem] object-cover"
            />
            <Image
              src="/icons/arrow_down_icon.png"
              alt="arrow down"
              width={10}
              height={15}
            />
          </div>
        </div>
        <ul
          className={`${
            isOpen ? "" : "hidden"
          } border border-label absolute w-full max-h-[13rem] rounded-lg mt-1 overflow-y-auto`}
        >
          {data?.map((item) => (
            <li
              onClick={() => handleSelect(item)}
              key={item.id}
              className={`${
                selected?.id === item?.id
                  ? "text-white bg-primary2"
                  : "text-primary1 bg-white"
              }  py-2 px-6  hover:bg-primary2 hover:text-white cursor-pointer `}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
