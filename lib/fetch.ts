import { client } from "./client";
import { postPathsQuery, postQuery, postsQuery } from "./queries";

export async function getPosts() {
  const posts = await client.fetch(postsQuery);
  console.log(posts);
  return posts;
}

export async function getPostParams() {
  const params = await client.fetch(postPathsQuery);
  return params;
}

export async function getPostData(params: any) {
  const post = await client.fetch(postQuery, params);
  return post;
}
