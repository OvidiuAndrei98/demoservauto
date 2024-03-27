import IconTextItem from "@/components/IconTextItem";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="bg-red-700 full flex flex-col items-center h-full py-10 px-5 text-white">
        <div className="text-3xl mb-5">Nu ezita sa ne contactezi</div>
        <div className="flex flex-col items-center">
          <div className="text-xl mb-2">Program</div>
          <div className="flex space-x-10">
            <div className="flex flex-col mb-5">
              <div>Luni - Sambata</div>
              <div>09:00 - 18:00</div>
            </div>
            <div>
              <div>Duminica</div>
              <div>Inchis</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl mb-2">Adresa</div>
          <div className="flex space-x-10">
            <div className="flex flex-col mb-5">
             <IconTextItem src="/pin-icon.png" text="Strada Adresa Nr.3, Bucuresti, Sector 3" font="normal" margin="2" size="md"/>
             <IconTextItem src="/email-icon.png" text="contact@exelexis.ro" font="normal" margin="2" size="md"/>
             <IconTextItem src="/phone-icon.png" text="0743 555 444" font="normal" margin="2" size="md"/>
            </div>
          </div>
          
        </div>
      </div>
      <Image
        className="w-[95%] my-[-30px] m-auto h-[200px] fit-cover border-8"
        src="/Locator.jpg"
        width={900}
        height={900}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Contact;
