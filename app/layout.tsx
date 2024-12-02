import { Metadata } from "next";
import "./global.css";
import Nav from "./Nav";
import { clamp } from "./utils/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  verification: {
    google: "ifqq9Z08vZAWb8Z59xVhuA42IfNdrT5-nhyuua35ZlQ",
  },
};

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
        <SpeedInsights />
      </body>
    </html>
  );
}
