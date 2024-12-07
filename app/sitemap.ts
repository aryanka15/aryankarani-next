import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aryan-karani.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://aryan-karani.vercel.app/gallery",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://aryan-karani.vercel.app/blog",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://aryan-karani.vercel.app/kidwithacamera",
      lastModified: new Date(),
      priority: 0.4,
    },
  ];
}
