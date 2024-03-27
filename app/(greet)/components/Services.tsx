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
    <div className="h-full w-2/3 my-20 flex items-center justify-center flex-col relative">
      <div className="text-5xl whitespace-pre-line text-center">
        We are specialists in following services
      </div>
      <div className="my-10 flex flex-col space-y-10">
        <Card className="max-w-100 hover:bg-[url('/engine-card.jpg')] hover:brightness-75 hover:text-white  bg-cover h-[200px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Engine Repairs</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-[red] z-10">Card Footer</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
        <Card className="bg-white h-[200px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Engine Repairs</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between md:space-x-20 space-x-10">
            <span className="text-[red]">Card Footer</span>
            <Image
        className=""
        src="/engine-icon.png"
        width={50}
        height={50}
        alt="engine"
      />
          </CardFooter>
        </Card>
        <Card className="max-w-100 bg-white h-[200px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Engine Repairs</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20">
            <span className="text-[red]">Card Footer</span>
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