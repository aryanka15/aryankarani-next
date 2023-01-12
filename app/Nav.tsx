'use client'

import Link from "next/link";
export default function Nav() {

  function showDropdown() {
    let nav = document.getElementById("dropdownNav");
    if (nav!.style.display === "flex") {
      nav!.style.display = "none";
    } else {
      nav!.style.display = "flex";
    }
  }

  return (
    <nav className="Nav fixed z-10 w-full bg-black/50 text-white">
      <div className="flex flex-row items-center justify-around md:justify-start py-3">
        <div className="flex md:absolute md:mx-10 items-center md:justify-start">
          <Link href={"/"} className="flex items-center">
            <i className="fa-solid fa-xl md:fa-2xl fa-camera"></i>
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
            <i className="fa-solid fa-xl fa-bars"></i>
          </button>
        </div>
      </div>
      <div id="dropdownNav" className="hidden">
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
        </ul>
      </div>
    </nav>
  );
}
