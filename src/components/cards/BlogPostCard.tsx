import Image from "next/image";

type BlogPostCardProps = {
  image: string;
  date: string;
  comment: string;
  title: string;
  description: string;
};

const BlogPostCard = ({
  image,
  date,
  comment,
  title,
  description,
}: BlogPostCardProps) => {
  return (
    <div className="col-span-4 first:col-span-8 group">
      <div className="w-full h-[225px] rounded-t-md">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between group-first:grid grid-cols-2 mt-3">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/calendar_icon.png"
              alt="calendar icon"
              width={24}
              height={24}
            />
            <p className="">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/comment_icon.png"
              alt="calendar icon"
              width={24}
              height={24}
            />
            <p className="">{comment}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="h-[3.75rem] font-medium text-2xl text-black">{title}</p>
          <p className="min-h-[200px] text-lg text-black">{description}</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-medium text-[#111111]">Explore More</p>
          <Image
            src="/icons/long_arrow_icon.png"
            alt="explore arrow"
            width={39}
            height={10}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};
export default BlogPostCard;