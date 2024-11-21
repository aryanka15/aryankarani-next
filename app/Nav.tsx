"use client";

import { BsCameraFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  function showDropdown() {
    let nav = document.getElementById("dropdownNav");
    if (nav!.style.display === "flex") {
      nav!.style.display = "none";
    } else {
      nav!.style.display = "flex";
    }
  }

  function hideDropdown() {
    let nav = document.getElementById("dropdownNav");
    nav!.style.display = "none";
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", hideDropdown);
      window.addEventListener("resize", hideDropdown);
      return function () {
        window.removeEventListener("resize", hideDropdown);
      };
    }
  });

  return (
    <nav className="Nav fixed top-0 z-10 w-full bg-black/50 text-white">
      <div className="flex flex-row items-center justify-around md:justify-start py-3">
        <div className="flex md:absolute md:mx-10 items-center md:justify-start">
          <Link href={"/"} className="flex items-center">
            <BsCameraFill aria-label={"Back to Home"} className="w-5 h-5 md:w-10 md:h-10" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center w-full py-1">
          <ul className="px-3 py-4 flex flex-row items-center text-3xl xl:text-xl xl:py-2">
            <li className="mx-3 block">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="mx-3 block">
              <Link href={"/kidwithacamera"}>KidWithACamera</Link>
            </li>
            <li className="mx-3 block">
              <Link href={"/gallery"} className="">
                Gallery
              </Link>
            </li>
            <li className="mx-3 block">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden items-center">
          <h1 className="text-lg">KidWithACamera</h1>
        </div>
        <div className="flex md:hidden items-center">
          <button
            id="menuButton"
            onClick={showDropdown}
            className="flex items-center"
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div id="dropdownNav" className="hidden md:hidden">
        <ul
          id="dropdownNavList"
          className="px-3 py-4 flex flex-row w-full items-center overflow-scroll"
        >
          <li className="mx-3 block">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mx-3 block">
            <Link href={"/kidwithacamera"}>KidWithACamera</Link>
          </li>
          <li className="mx-3 block">
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className="mx-3 block">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="mx-3 block">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
