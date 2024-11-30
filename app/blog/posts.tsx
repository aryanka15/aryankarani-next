import BlogCard from "../BlogCard";

export default function Posts({ posts }: { posts: any }) {
  return (
    <>
      <div>
        {posts.map((post: any) => (
          <BlogCard data={post} main={false}></BlogCard>
        ))}
      </div>
    </>
  );
}
