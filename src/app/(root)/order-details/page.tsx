import Button from "@/components/shared/Button";
import Table from "@/components/shared/Table";
import {
  additionalInfo,
  receiverData,
  shipperData,
  shipperInformation,
  trackingInfo,
} from "@/data/adminData";
import Image from "next/image";

const page = () => {
  const additionalConfig = [
    { key: "totalFreight", name: "Total Freight", visibleForMobile: true },
    { key: "containerId", name: "Container ID", visibleForMobile: true },
    { key: "bookingId", name: "Location", visibleForMobile: true },
    { key: "paymentStatus", name: "Payment Status", visibleForMobile: true },
  ] as {
    key: keyof (typeof additionalInfo)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  const trackingConfig = [
    { key: "date", name: "Date", visibleForMobile: true },
    { key: "time", name: "Time", visibleForMobile: true },
    { key: "location", name: "Updated By", visibleForMobile: true },
    { key: "status", name: "Status", visibleForMobile: true },
    { key: "updatedBy", name: "Updated By", visibleForMobile: true },
    { key: "remarks", name: "Remarks", visibleForMobile: false },
  ] as {
    key: keyof (typeof trackingInfo)[0];
    name: string;
    visibleForMobile: boolean;
  }[];

  return (
    <div className="flex flex-col py-14 px-5 lg:px-[3.75rem]">
      <h2 className="text-black text-center">Order Information</h2>
      <div className="flex flex-col gap-2 self-end">
        <Image
          src="/images/bar_code.png"
          alt="bar code"
          width={150}
          height={114}
        />
        <p className="">Sr no: 123456</p>
      </div>
      <div className="flex flex-col py-8">
        <div className="w-full justify-between flex">
          <p className="w-full lg:w-[500px] font-medium text-sm lg:text-[1.625rem] text-neutralBlack lg:leading-[2rem]">
            Sender Information
          </p>
          <p className="w-full lg:w-[500px] font-medium text-sm lg:text-[1.625rem] text-neutralBlack lg:leading-[2rem]">
            Receiver Information
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#57595C] mt-3 mb-6" />
        <div className="flex justify-between">
          <div className="w-full lg:w-[500px] flex flex-col gap-[.625rem]">
            {Object.entries(shipperData).map(([key, value], index: number) => (
              <p
                key={`${key}-${index}`}
                className="text-xs lg:text-lg text-[#2C2C2C]"
              >
                {value}
              </p>
            ))}
          </div>
          <div className="w-full lg:w-[500px] flex flex-col gap-[.625rem]">
            {Object.entries(receiverData).map(([key, value], index: number) => (
              <p
                key={`${key}-${index}`}
                className="text-xs lg:text-lg text-[#2C2C2C]"
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full bg-primary text-center my-8">
          <p className="text-xl text-white py-3">Shipment Status:</p>
        </div>
        <div className="w-full justify-between flex">
          <p className="w-[500px] font-medium text-[1.625rem] text-neutralBlack leading-[2rem]">
            Shipper Information
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#57595C] mt-3 mb-6" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4">
          {Object.entries(shipperInformation).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-2">
              <p className="font-medium text-sm lg:text-lg text-[#2C2C2C]">
                {key}
              </p>
              <p className="text-xs lg:text-base text-[#2C2C2C]">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <Table data={additionalInfo} config={additionalConfig} serial />
        <Table data={trackingInfo} config={trackingConfig} serial />
        <div className="flex self-end">
          <Button text="Print Report" />
        </div>
      </div>
    </div>
  );
};
export default page;
