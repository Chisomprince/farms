"use client";

import Link from "next/link";
import { useState } from "react";
import { BiShoppingBag, BsChatQuote, BsQuestionSquare } from "react-icons/bs";
import { HiMenu, HiOutlineUser } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header class="absolute text-white w-full top-0  shadow-md flex items-center justify-between px-8 py-02">
        <h1 class="w-3/12">
          <img src="/logo-white.png" alt="logo" />
        </h1>
        <nav class="nav  text-sm">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <IoMdClose className="w-5 h-5" />
            ) : (
              <HiMenu className="w-5 h-5" />
            )}
          </button>
          <ul class="hidden lg:flex items-center gap-8">
            <li class="flex items-center gap-2 p-4  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <HiOutlineUser /> <Link href="">Home</Link>
            </li>
            <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <BsQuestionSquare /> <a href="">Help</a>
            </li>
            <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <MdAddShoppingCart /> <a href="">Cart</a>
            </li>
            <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <BsChatQuote /> <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>{" "}
        <ul
          class={`lg:hidden ${
            showMenu ? "" : "hidden"
          }  w-full h-screen bg-white text-gray-900 absolute top-20 left-0 z-50  flex-col items-center gap-8`}
        >
          <li class="flex items-center gap-2 p-4  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <HiOutlineUser /> <Link href="">Home</Link>
          </li>
          <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <BiShoppingBag /> <Link href="/products">Products</Link>
          </li>
          <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <MdAddShoppingCart /> <a href="">Cart</a>
          </li>
          <li class="flex items-center gap-2 p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <BsChatQuote /> <a href="">Contact Us</a>
          </li>
        </ul>
      </header>
    </>
  );
}
