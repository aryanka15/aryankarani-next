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
    <nav className="Nav fixed top-0 z-50 w-full bg-neutral-900/40 backdrop-blur-md border-b border-gray-200/20 text-gray-200 transition-colors duration-300">
      <div className="flex flex-row items-center justify-between md:justify-start py-3 px-4 md:px-10">
        <div className="flex items-center md:justify-start">
          <Link
            href={"/"}
            className="flex items-center hover:scale-110 transition-transform duration-200"
          >
            <BsCameraFill
              aria-label={"Back to Home"}
              className="w-8 h-8 md:w-10 md:h-10 text-white"
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-center w-full">
          <ul className="py-2 flex flex-row items-center font-semibold tracking-wide">
            <li className="mx-4 block">
              <Link
                href={"/"}
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li className="mx-4 block">
              <Link
                href={"/kidwithacamera"}
                className="hover:text-white transition-colors duration-200"
              >
                KidWithACamera
              </Link>
            </li>
            <li className="mx-4 block">
              <Link
                href={"/gallery"}
                className="hover:text-white transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>
            <li className="mx-4 block">
              <Link
                href={"/about"}
                className="hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li className="mx-4 block">
              <Link
                href={"/blog"}
                className="hover:text-white transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden items-center justify-end w-full">
          <button
            id="menuButton"
            onClick={showDropdown}
            className="flex items-center text-white"
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div id="dropdownNav" className="hidden md:hidden">
        <ul
          id="dropdownNavList"
          className="px-3 py-4 flex flex-col w-full items-center text-sm font-light text-center"
        >
          <li className="my-2 block">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="my-2 block">
            <Link href={"/kidwithacamera"}>KidWithACamera</Link>
          </li>
          <li className="my-2 block">
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className="my-2 block">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="my-2 block">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
