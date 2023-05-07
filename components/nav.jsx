"use client";

import Link from "next/link";
import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsChatQuote } from "react-icons/bs";
import { HiMenu, HiOutlineUser } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

export default function Nav({ dark }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header
        class={`${
          dark ? "text-black" : "text-white"
        } absolute  w-full top-0  flex items-center justify-between px-8 py-2`}
      >
        <Link href="/" class="w-3/12">
          {dark ? (
            <img src="/logo-dark.png" alt="logo" className="object-contain " />
          ) : (
            <img src="/logo-white.png" alt="logo" className="object-contain " />
          )}
        </Link>
        <nav class="nav  text-sm">
          <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden ">
            {showMenu ? (
              <IoMdClose className="w-5 h-5" />
            ) : (
              <HiMenu className="w-5 h-5" />
            )}
          </button>
          <ul
            class={`${
              dark ? "text-black" : "text-white"
            } hidden lg:flex items-center gap-8`}
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
        </nav>{" "}
        <ul
          class={`lg:hidden ${
            showMenu ? "" : "hidden"
          }  w-full h-screen bg-white text-gray-900 absolute top-20 left-0 z-50  flex-col items-center gap-8`}
        >
          <li class="flex items-center gap-2 p-4  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <HiOutlineUser /> <Link href="/">Home</Link>
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
