import IconTextItem from "@/components/IconTextItem";
import Image from "next/image";

const Contact = ({scrollHandler}: {scrollHandler: string}) => {
  return (
    <div id={scrollHandler} className="w-full md:flex md:flex-row-reverse md:mb-20 md:h-[450px]">
      <div id="contat-subsection" className="bg-red-700 full flex flex-col items-center h-full py-10 px-5 text-white md:flex-[0_0_55%]">
        <div className="text-3xl mb-5">Nu ezita sa ne contactezi</div>
        <div className="md:flex md:flex-row md:justify-around md:w-full md:mt-10">
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">Program</div>
            <div className="flex space-x-10">
              <div className="flex flex-col mb-5">
                <div>Luni - Vineri</div>
                <div>09:00 - 18:00</div>
              </div>
              <div>
                <div>Sambata/Duminica</div>
                <div>Inchis</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl mb-2">Adresa</div>
            <div className="flex space-x-10">
              <div className="flex flex-col mb-5">
                <IconTextItem
                  src="/pin-icon.png"
                  text="Pericle Papahagi 4, Bucuresti, Romania"
                  font="normal"
                  margin="2"
                  textSize="md"
                />
                <IconTextItem
                  src="/email-icon.png"
                  text="info@safehousemotorsport.ro"
                  font="normal"
                  margin="2"
                  textSize="md"
                />
                <IconTextItem
                  src="/phone-icon.png"
                  text="0729 962 758"
                  font="normal"
                  margin="2"
                  textSize="md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-[95%] my-[-30px] m-auto h-[200px] fit-cover border-8 md:mr-[-50px] md:z-10 md:h-[95%] md:mt-[70px] md:flex-[0_0_35%]"
        src="/Locator.jpg"
        width={900}
        height={900}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Contact;
