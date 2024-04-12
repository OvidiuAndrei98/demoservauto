import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="w-full pt-[50px] p-10 h-auto bg-black flex flex-col items-center">
      <div className="text-white text-4xl">
        Safe<span className="text-red-600">House</span>
      </div>
      <div className="flex justify-around w-full mt-5 flex-wrap">
        <div className="text-white">
          <h4 className="font-bold mb-2">Useful links</h4>
          <div className="text-gray-300 opacity-[0.7]">Home</div>
          <div className="text-gray-300 opacity-[0.7]">About</div>
          <div className="text-gray-300 opacity-[0.7]">Services</div>
          <div className="text-gray-300 opacity-[0.7]">About</div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-white">Our services</h4>
          <div className="text-gray-300 opacity-[0.7]">Serv1</div>
          <div className="text-gray-300 opacity-[0.7]">Serv2</div>
          <div className="text-gray-300 opacity-[0.7]">Serv3</div>
          <div className="text-gray-300 opacity-[0.7]">Serv4</div>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-2">
          <div className="font-bold mb-2 text-white">Program</div>
          <div className="flex space-x-10">
            <div className="flex flex-col mb-5 text-gray-300 opacity-[0.7]">
              <div>Luni - Sambata</div>
              <div>09:00 - 18:00</div>
            </div>
            <div className="text-gray-300 opacity-[0.7]">
              <div>Duminica</div>
              <div>Inchis</div>
            </div>
          </div>
          </div>
          <Separator />
          <div className="text-gray-300 opacity-[0.5] text-sm mt-1">Copyright @ 2024. All rights rserved.</div>
          <div className="text-gray-300 opacity-[0.5] text-sm">Made by <span className="text-red-600">AndreiPenica</span>.</div>
    </div>
  );
};

export default Footer;
