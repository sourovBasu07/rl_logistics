import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostCard from "@/components/cards/BlogPostCard";
import { blogPosts } from "@/data";

const page = () => {
  return (
    <div className="container flex flex-col items-center">
      <Breadcrumbs title="Our Blog" pageName="Our blog" />
      <div className="flex flex-col lg:grid grid-cols-12 gap-x-7 gap-y-12">
        {blogPosts.map((post, index: number) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      <div className="flex items-center gap-5 py-24">
        {[1, 2, 3].map((page) => (
          <div
            key={page}
            className="first:bg-[#F8EAEA] first:border first:border-[#D98485] min-w-[3.75rem] min-h-[3.75rem] flex justify-center items-center rounded-full cursor-pointer"
          >
            <p className="">{page}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
