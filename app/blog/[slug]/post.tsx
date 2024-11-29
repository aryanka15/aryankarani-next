export default function Post({ post }: { post: any }) {
  const text = post.body[0].children[0].text;
  return (
    <div className="flex flex-col text-3xl text-center justify-center align-center">
      {text}
    </div>
  );
}
