import BlogCard from "../BlogCard";

export default function Posts({ posts }: { posts: any }) {
  return (
    <>
      <div>
        {posts.map((post: any) => (
          <BlogCard key={post.slug} data={post} main={false}></BlogCard>
        ))}
      </div>
    </>
  );
}
