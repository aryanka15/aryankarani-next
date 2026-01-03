"use client";

import { useState, useEffect } from "react";
import Posts from "./posts";
import SearchBar from "./SearchBar";

export default function BlogContent() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Extract unique categories from posts
  const categories: string[] = Array.from(
    new Set(
      posts
        .flatMap(
          (post: any) => post.categories?.map((cat: any) => cat.title) || []
        )
        .filter(Boolean)
    )
  );

  const filteredPosts = posts.filter((post: any) => {
    // Filter by search term
    const titleMatch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch = post.categories?.some((cat: any) =>
      cat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesSearch = searchTerm === "" || titleMatch || categoryMatch;
    // Filter by selected category
    const matchesCategory =
      !selectedCategory ||
      (post.categories &&
        post.categories.some((cat: any) => cat.title === selectedCategory));
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
        <div className="text-white text-xl animate-pulse">Loading posts...</div>
      </div>
    );
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="BlogPosts w-full mx-auto max-w-7xl px-4 mb-10">
        <Posts posts={filteredPosts} />
      </div>
    </>
  );
}
