import { Button } from "@/components/ui/button";
import Image from "next/image";
import Services from "./components/Services";
import ChoseUs from "./components/ChoseUs";
import Book from "./components/Book";
import Contact from "./components/Contact";
import LatestWork from "./components/LatestWork";

const GreetPage = () => {
  return (
    <div className="h-full test flex items-center justify-center flex-col">
      <Image
        className="w-full h-screen brightness-50 object-cover"
        src="/landing-image.jpg"
        width={900}
        height={900}
        alt="Picture of the author"
      />
      <div className="top-[20%] flex flex-col items-center justify-center w-2/3 md:top-80 text-white absolute md:left-20 md:w-1/3 md:items-start">
        <span className="relative text-5xl md:text-8xl sm:text-3xl">
          Precision Performance & Tailored
          <span className="bg-gradient-to-r from-red-600 via-red-350 to-red-400 inline-block text-transparent bg-clip-text">
            Service
          </span>
          Excellence
        </span>
        <div className="relative top-5 py-30 text-lg">
          Explore our range of services and schedule your appointment today for
          a smoother, safer ride tomorrow.
        </div>
        <div className="relative top-10 flex justify-start gap-20 md:items-start md:w-full">
          <Button
            size="lg"
            className="relative hover:bg-[white] flex h-[50px] w-[150px] items-center justify-center overflow-hidden bg-[red] text-[white] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[white] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-[red]"
          >
            <span className="relative z-10">Programeaza-te</span>
            {/* <Link href="/sign-up">Programeaza-te</Link> */}
          </Button>
          <Button
            size="lg"
            className="relative hover:bg-[red] flex h-[50px] w-[150px] items-center justify-center overflow-hidden bg-white text-[red] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-white"
          >
            <span className="relative z-10">Contact</span>
            {/* <Link href="/sign-up">Programeaza-te</Link> */}
          </Button>
        </div>
      </div>
      <Services />
      <ChoseUs />
      <Book />
      <LatestWork />
      <Contact />
    </div>
  );
};

export default GreetPage;
