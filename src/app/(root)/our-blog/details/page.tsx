import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

const page = () => {
  return (
    <div className="container flex flex-col pb-[200px]">
      <Breadcrumbs title="Our Blog" pageName="Our blog" />
      <div className="">
        <div className="w-full h-[340px] rounded-md">
          <Image
            src="/images/blog_image_6.jpg"
            alt="post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex items-center gap-[200px] pt-6 pb-8">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/calendar_icon.png"
              alt="calendar icon"
              width={24}
              height={24}
            />
            <p className="">10 May 2024</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/comment_icon.png"
              alt="calendar icon"
              width={24}
              height={24}
            />
            <p className="">No Comment</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="font-medium text-xl text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="text-lg text-[#232323]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex-1 h-[340px] rounded-md">
              <Image
                src="/images/blog_5.jpeg"
                alt="post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-[2] space-y-6">
              <p className="text-lg text-[#232323]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-lg text-[#232323]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <p className="flex-1 text-lg text-[#232323]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="h-[340px] flex-[2] grid grid-cols-2 gap-5">
              <Image
                src="/images/blog_2.jpeg"
                alt="post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-md"
              />
              <Image
                src="/images/blog_3.jpeg"
                alt="post image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="pt-3">
            <p className="text-lg text-[#232323]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
