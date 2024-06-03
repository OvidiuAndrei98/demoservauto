import IconTextItem from "@/components/IconTextItem";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const ChoseUs = () => {
  return (
    <div
    id="about-section"
      className=" flex flex-col py-5 px-[30px] md:flex-row md:px-[10%] gap-10 items-center justify-center relative h-auto w-full bg-[url('/about-cover.jpg')]
    bg-cover
    bg-no-repeat
    bg-center
    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    before:from-70%
    before:to-transparent
    before:opacity-[.9]
    before:z-0"
    >
      <div className="relative flex flex-row gap-5 w-full md:my-[100px]">
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full h-[150px] border-2">
            <Image
              className="object-cover bg-no-repeat bg-center w-full h-full"
              src="/about-2.jpg"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div>
          <div className="w-full h-[150px] border-2">
            <Image
              className="object-cover bg-no-repeat bg-center w-full h-full"
              src="/about-1.jpg"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-full h-[320px] border-2">
          <Image
            className="object-cover bg-no-repeat bg-center w-full h-full"
            src="/about-large.jpg"
            width={900}
            height={900}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="z-10 text-white relative h-auto py-5 w-full flex flex-col items-start">
        <h1 className="text-4xl font-semibold">De ce să ne alegeți pe noi</h1>
        <span className="my-3 text-white-300 opacity-[.8] font-nomral">
        Alegeți-ne pentru o experiență auto fără cusur - acolo unde expertiza întâlnește excelența. Cu un angajament pentru calitate și satisfacția clienților.
        </span>
        <IconTextItem
          src="/mechanic-icon.png"
          text="Mecanici Experți Certificați"
        />
        <Separator />
        <IconTextItem src="/tool-icon.png" text="Servicii rapide și de calitate" />
        <Separator />
        <IconTextItem src="/discount-icon.png" text="Cele mai bune prețuri din oraș" />
      </div>
    </div>
  );
};

export default ChoseUs;
