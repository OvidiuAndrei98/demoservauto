import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  return (
    <div id="services-section" className="h-full w-2/3 my-20 flex items-center justify-center flex-col relative">
      <div className="text-5xl whitespace-pre-line text-center">
      Suntem specializați în următoarele servicii
      </div>
      <div className="relative my-10 flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10">
        <Card className="relative w-full max-w-[260px] bg-cover h-[200px] flex flex-col justify-between before:content-none before:absolute hover:before:bg-[url('/revizie-auto.jpg')] hover:text-white hover:before:absolute hover:before:content-[''] hover:before:w-full hover:before:h-full hover:before:brightness-50 before:rounded-lg hover:before:bg-[length:100%_100%]">
          <CardHeader>
            <CardTitle className="z-10">Revizie</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-5 z-10">
            <span className="text-[red] z-10">Revizie auto</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
        <Card className="relative w-full max-w-[260px] bg-cover h-[200px] flex flex-col justify-between before:content-none before:absolute hover:before:bg-[url('/schimb-ulei.jpg')] hover:text-white hover:before:absolute hover:before:content-[''] hover:before:w-full hover:before:h-full hover:before:brightness-50 before:rounded-lg hover:before:bg-[length:100%_100%]">
          <CardHeader>
            <CardTitle className="z-10">Schimb ulei/filtre</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-5 z-10">
            <span className="text-[red] text-wrap">Schimb ulei și filtre auto</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
        <Card className="relative w-full max-w-[260px] bg-cover h-[200px] flex flex-col justify-between before:content-none before:absolute hover:before:bg-[url('/diagnoza.jpg')] hover:text-white hover:before:absolute hover:before:content-[''] hover:before:w-full hover:before:h-full hover:before:brightness-50 before:rounded-lg hover:before:bg-[length:100%_100%]">
          <CardHeader>
            <CardTitle className="z-10">Diagnoza</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-5 z-10">
            <span className="text-[red]">Diagnosticare completă a vehiculului</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
        <Card className="relative w-full max-w-[260px] bg-cover h-[200px] flex flex-col justify-between before:content-none before:absolute hover:before:bg-[url('/reparatii-generale.jpg')] hover:text-white hover:before:absolute hover:before:content-[''] hover:before:w-full hover:before:h-full hover:before:brightness-50 before:rounded-lg hover:before:bg-[length:100%_110%]">
          <CardHeader>
            <CardTitle className="z-10">Alte probleme</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-5 z-10">
            <span className="text-[red]">Reparare și întreținere auto diversă</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Services;