import Input from "@/components/shared/Input";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center gap-12">
      <div className="w-[482px] h-[570px] rounded-xl">
        <Image
          src="/images/cargo_image.png"
          alt="sign in image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-[482px] h-[570px] flex flex-col gap-8 border border-[rgba(0,0,0,0.1)] rounded-[1.625rem] p-8">
        <div className="flex flex-col items-center gap-3">
          <Image src="/images/logo.png" alt="logo" width={293} height={55} />
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-2xl text-black">Welcome Back!</p>
            <p className="text-sm text-[#A2A0A0]">
              We missed you! Please enter your details.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Input label="Your Email" placeholder="Enter your email" />
            <Input
              type="password"
              label="Your Password"
              placeholder="***************"
            />
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
          <div className="w-[331px] flex flex-col gap-5 mx-auto">
            <button className="w-full bg-primary rounded text-white duration-500 py-2 hover:bg-secondary hover:text-primary">
              Log in
            </button>
            <button className="w-full py-2 flex justify-center items-center gap-2 border border-[rgba(0,0,0,0.4)] rounded">
              <Image
                src="/icons/google_logo.png"
                alt="google logo"
                width={20}
                height={20}
              />
              <p className="text-sm">Sign in with google</p>
            </button>
            <p className="w-full py-2 text-sm text-center">
              Don’t have an account?{" "}
              <Link href="/" className="font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
