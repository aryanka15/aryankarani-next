import BlogCard from "../BlogCard";

export default function Posts({ posts }: { posts: any }) {
  const numberOfPosts = posts.length === 1 ? `1 Post` : `${posts.length}`;
  return (
    <div>
      {posts.map((post: any) => (
        <BlogCard data={post} main={false}></BlogCard>
      ))}
    </div>
  );
}
