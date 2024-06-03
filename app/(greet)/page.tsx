'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Services from "./components/Services";
import ChoseUs from "./components/ChoseUs";
import Book from "./components/Book";
import Contact from "./components/Contact";
import LatestWork from "./components/LatestWork";
import { useScrollTo } from "@/hooks/useScroll";

const GreetPage = () => {
  const [about, scrollToAbout] = useScrollTo();

  const [services, scrollToServices] = useScrollTo();

  const [contact, scrollToContact] = useScrollTo();

  const [appointment, scrollToAppointment] = useScrollTo();

  return (
    <div id="hero-section" className="h-full test flex items-center justify-center flex-col">
      <Image
        className="w-full h-screen brightness-50 object-cover"
        src="/landing-image.jpg"
        width={900}
        height={900}
        alt="Picture of the author"
      />
      <div className="top-[20%] flex flex-col items-center justify-center w-2/3 md:top-80 text-white absolute md:left-20 md:w-1/3 md:items-start">
        <span className="relative text-5xl md:text-8xl sm:text-3xl">
        Precizie, Performanță și Excelență în Servicii
          <span className="bg-gradient-to-r from-red-600 via-red-350 to-red-400 inline-block text-transparent bg-clip-text">
          Personalizate
          </span>
        </span>
        <div className="relative top-5 py-30 text-lg">
        Explorează gama noastră de servicii și programează-ți o întâlnire astăzi pentru o călătorie mai lină și mai sigură mâine.
        </div>
        <div className="relative top-10 flex justify-start gap-20 md:items-start md:w-full">
          <Button
          onClick={scrollToAppointment as () => void}
            size="lg"
            className="relative hover:bg-[white] flex h-[50px] w-[150px] items-center justify-center overflow-hidden bg-[red] text-[white] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[white] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-[red]"
          >
            <span className="relative z-10">Programeaza-te</span>
          </Button>
          <Button
          onClick={scrollToContact as () => void}
            size="lg"
            className="relative hover:bg-[red] flex h-[50px] w-[150px] items-center justify-center overflow-hidden bg-white text-[red] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-white"
          >
            <span className="relative z-10">Contact</span>
          </Button>
        </div>
      </div>
      <Services />
      <ChoseUs />
      <Book appointment={appointment as string}/>
      <LatestWork />
      <Contact scrollHandler={contact as string}/>
    </div>
  );
};

export default GreetPage;
