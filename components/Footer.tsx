"use client";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import { URL } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="w-full pt-[50px] p-10 h-auto bg-black flex flex-col items-center">
      <div className="text-white text-4xl">
        <Link
          href="#hero-section"
          className="flex items-center space-x-3 rtl:space-x-reverse w-[105px] md:w-[150px]"
        >
          <Image
            src="/logoTransparent.jpeg"
            alt="logo"
            width={200}
            height={150}
          />
        </Link>
      </div>
      <div className="flex justify-around w-full mt-5 flex-wrap">
        <div className="text-white">
          <h4 className="font-bold mb-2">Link-uri urile</h4>
          <div className="text-gray-300 opacity-[0.7]">
            <Link href="#hero-section">Home</Link>
          </div>
          <div className="text-gray-300 opacity-[0.7]">
            <Link href="#about-section">Despre noi</Link>
          </div>
          <div className="text-gray-300 opacity-[0.7]">
            <Link href="#services-section">Servicii</Link>
          </div>
          <div className="text-gray-300 opacity-[0.7]">
            <Link href="#contat-subsection">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Serviciile noastre</h4>
          <div className="text-gray-300 opacity-[0.7]">Revizie</div>
          <div className="text-gray-300 opacity-[0.7]">Schimb ulei/filtre</div>
          <div className="text-gray-300 opacity-[0.7]">Diagnoza</div>
          <div className="text-gray-300 opacity-[0.7]">Alte probleme</div>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-2">
        <div className="font-bold mb-2 text-white">Program</div>
        <div className="flex space-x-10">
          <div className="flex flex-col mb-5 text-gray-300 opacity-[0.7]">
            <div>Luni - Vineri</div>
            <div>09:00 - 18:00</div>
          </div>
          <div className="text-gray-300 opacity-[0.7]">
            <div>Sambata/Duminica</div>
            <div>Inchis</div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="my-2 flex gap-5">
        <Image
          onClick={() => URL("https://api.whatsapp.com/send?phone=732120955")}
          className="cursor-pointer"
          src="/instagram.png"
          alt="instagram"
          width={30}
          height={30}
        />
        <Image
          onClick={() => URL("https://www.instagram.com/safehousemotorsport/")}
          className="cursor-pointer"
          src="/whappWhite.png"
          alt="whatsApp"
          width={30}
          height={30}
        />
      </div>
      <div className="text-gray-300 opacity-[0.5] text-sm mt-1">
        Copyright @ 2024. All rights rserved.
      </div>
      <div className="text-gray-300 opacity-[0.5] text-sm">
        Made by{" "}
        <span
          onClick={() => URL("https://www.instagram.com/andreipenica/")}
          className="text-red-600 cursor-pointer"
        >
          AndreiPenica
        </span>
        .
      </div>
    </div>
  );
};

export default Footer;
