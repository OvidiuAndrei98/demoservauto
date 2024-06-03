"use client";
 
import React from "react";
import IconTextItem from './IconTextItem';
import Image from "next/image";
import { useScrollTo } from "@/hooks/useScroll";
import Link from "next/link";
import { URL } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="bg-black dark:bg-black-900 fixed w-full z-[1000] top-0 start-0 border-b border-red-600 dark:border-red-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse w-[105px] md:w-[150px]">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
      {/* <span className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">Safe<span className="text-red-600">House</span></span> */}
      <Image src='/logoTransparent.jpeg' alt="logo" width={200} height={150}/>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700" onClick={() =>
                   URL("https://api.whatsapp.com/send?phone=732120955")
                }><IconTextItem src="/whatsapp.png" text="WhatsApp" textSize="md" margin="0" alt="whatsapp"/></button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex bg-black flex-col p-4 md:p-0 mt-4 font-medium border border-red-600 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-black-800 md:dark:bg-black-900 dark:border-red-600">
      <li>
        <Link href="#hero-section" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white hover:text-red-600" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="#about-section" className="block hover:text-red-600 py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:dark:hover:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Despre noi</Link>
      </li>
      <li>
        <Link href="#services-section" className="block hover:text-red-600 py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:dark:hover:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Servicii</Link>
      </li>
      <li>
        <Link href="#contat-subsection" className="block hover:text-red-600 py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:dark:hover:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
};

export default Navbar;
