import Input from "@/components/shared/Input";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen flex flex-col items-center gap-4 pt-12">
      <Image src="/images/logo.png" alt="logo" width={293} height={55} />
      <div className="w-full flex justify-center items-center bg-[#FFB007] py-8">
        <div className="w-[500px] flex flex-col gap-8 bg-[rgba(255,255,255,0.16)] rounded-xl px-11 py-8">
          <p className="font-semibold text-2xl text-black text-center">
            Admin Login
          </p>
          <div className="flex flex-col gap-5">
            <div className="w-max flex self-end items-center gap-2 border border-primary rounded px-2 py-1">
              <Image
                src="/icons/nav_icon.png"
                alt="nav icon"
                width={30}
                height={30}
              />
              <Image
                src="/icons/arrow_down_icon.png"
                alt="arrow down"
                width={10}
                height={5}
              />
            </div>
            <Input label="Your Email" />
            <Input type="password" label="Your Password" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-primary w-[1rem] h-[1rem]"
                />
                <p className="text-sm text-[#A2A0A0]">Remember me</p>
              </div>
              <Link href="/" className="font-medium text-sm">
                Forgot password
              </Link>
            </div>
          </div>
          <button className="w-[331px] mx-auto bg-primary rounded text-white py-2">
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};
export default page;
