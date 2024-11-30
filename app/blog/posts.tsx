import BlogCard from "../BlogCard";

export default function Posts({ posts }: { posts: any }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-x-5 gap-y-5">
        {posts.map((post: any) => (
          <BlogCard key={post.publishedAt} data={post} main={false}></BlogCard>
        ))}
      </div>
    </>
  );
}
