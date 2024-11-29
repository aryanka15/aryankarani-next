import "./global.css";
import Nav from "./Nav";
import { clamp } from "./utils/utils";
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"h-screen"}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
