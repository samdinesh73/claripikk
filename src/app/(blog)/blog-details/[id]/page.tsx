import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

export const metadata: Metadata = {
  title: "Claripik- Blog Details page",
};

export async function generateStaticParams() {
  return blog_data.map((b) => ({ id: String(b.id) }));
}

export default function BlogDetailsPage({params}:{params:{id:string}}) {
  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
