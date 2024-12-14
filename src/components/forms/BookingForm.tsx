"use client";

import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { CopyIcon } from "@/assets";
import Link from "next/link";

const BookingForm = () => {
  const [openedTab, setOpenedTab] = useState<string>("");

  console.log(openedTab);

  return (
    <section className="pb-24">
      <div className="w-full justify-between flex">
        <p className="w-[500px] font-medium text-[1.375rem] text-neutralBlack leading-[2rem]">
          Sender Information
        </p>
        <p className="w-[500px] font-medium text-[1.375rem] text-neutralBlack leading-[2rem]">
          Receiver Information
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#57595C]" />
      <div className="flex justify-between pb-16">
        <div className="w-[500px] flex flex-col gap-3 py-5">
          <Input
            style="booknow"
            label="Sender's Name"
            placeholder="Enter name"
            required
          />
          <Input
            style="booknow"
            label="Company"
            placeholder="Enter company"
            required
          />
          <Input
            style="booknow"
            label="Address"
            placeholder="Enter address"
            required
          />
          <Input
            style="booknow"
            label="Country"
            placeholder="Enter country"
            required
          />
          <Input
            style="booknow"
            label="City"
            placeholder="Enter city"
            required
          />
          <Input
            style="booknow"
            label="State/Province"
            placeholder="Enter state/province"
            required
          />
          <Input
            style="booknow"
            label="Postal Code"
            placeholder="Enter postal code"
            required
          />
          <Input
            style="booknow"
            label="Mobile/Phone"
            placeholder="Enter mobile/phone"
            required
          />
          <Input
            style="booknow"
            label="Email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="w-[500px] flex flex-col gap-3 py-5">
          <Input
            style="booknow"
            label="Sender's Name"
            placeholder="Enter name"
            required
          />
          <Input
            style="booknow"
            label="Company"
            placeholder="Enter company"
            required
          />
          <Input
            style="booknow"
            label="Address"
            placeholder="Enter address"
            required
          />
          <Input
            style="booknow"
            label="Country"
            placeholder="Enter country"
            required
          />
          <Input
            style="booknow"
            label="City"
            placeholder="Enter city"
            required
          />
          <Input
            style="booknow"
            label="State/Province"
            placeholder="Enter state/province"
            required
          />
          <Input
            style="booknow"
            label="Postal Code"
            placeholder="Enter postal code"
            required
          />
          <Input
            style="booknow"
            label="Mobile/Phone"
            placeholder="Enter mobile/phone"
            required
          />
          <Input
            style="booknow"
            label="Email"
            placeholder="Enter email"
            required
          />
        </div>
      </div>
      <div className="pb-4">
        <p className="font-medium text-[1.375rem] text-neutralBlack leading-[2rem]">
          Are you interested to fill-up shipment information?
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#57595C]" />
      <div className="flex gap-10 pt-5">
        <Button
          style={openedTab === "shipment" ? "primary" : "outline"}
          text="Yes I want"
          className="w-[290px]"
          onClick={() => setOpenedTab("shipment")}
        />
        <Button
          style={openedTab === "link" ? "primary" : "outline"}
          text="Generate Link"
          className="w-[290px]"
          onClick={() => setOpenedTab("link")}
        />
      </div>
      {openedTab === "shipment" && (
        <>
          <div className="py-5">
            <p className="font-medium text-[1.375rem] text-neutralBlack leading-[2rem]">
              Shipment Information
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#57595C]" />
          <div className="flex justify-between">
            <div className="w-[500px] flex flex-col gap-3 py-5">
              <Input style="booknow" label="Origin" required />
              <Input style="booknow" label="Package" />
              <Input style="booknow" label="Product Location" required />
              <Input style="booknow" label="Destination" required />
              <Input
                style="booknow"
                label="City"
                placeholder="Enter city"
                required
              />
              <Input style="booknow" label="Carrier" />
              {/* // Type of Shipment dropdown  */}
              <Input style="booknow" label="Product" />
              <Input style="booknow" label="Weight (Kg)" required />
              {/* // Medium Dropdown  */}
              <Input style="booknow" label="Width (Cm)" />
            </div>
            <div className="w-[500px] flex flex-col gap-3 py-5">
              <Input style="booknow" label="Height (cm)" />
              <Input style="booknow" label="Qty" />
              {/* // Delivery Method Dropdown  */}
              <Input style="booknow" label="Payment Mode" />
              <Input style="booknow" label="Expected Delivery Date" />
              <Input style="booknow" label="Departure Time" />
              <Input
                style="booknow"
                label="Pick-up Date"
                placeholder="DD:MM:YY"
              />
              {/* // Type of Shipment dropdown  */}
              <Input
                style="booknow"
                label="Pick-up Time"
                placeholder="HH:MM:SS"
              />
              {/* // Medium Dropdown  */}
              <Input style="booknow" label="Total Freight" />
            </div>
          </div>
          <Input style="booknow" label="Comment" placeholder="Enter comment" />
          <Link href="/book-now/confirmed">
            <Button
              text="Confirm Booking "
              className="w-[290px] mx-auto mt-20"
            />
          </Link>
        </>
      )}
      {openedTab === "link" && (
        <div className="w-[808px] flex justify-between items-center bg-white/80 mx-auto rounded border-[0.4px] border-primary mt-10 px-6 py-4">
          <p className="text-xl text-[#1B1B1B] opacity-60">
            https://emamplelink.bd.com
          </p>
          <CopyIcon className="cursor-pointer" />
        </div>
      )}
    </section>
  );
};
export default BookingForm;
