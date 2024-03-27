import Image from "next/image";


const IconTextItem = ({src, text, size, font, margin}: {src:string, text:string, size?:string, font?:string, margin?:string}) => {
    return (
        <div className={`flex items-center space-x-5 my-${margin ?? 5}`}>
          <Image
            src={src}
            width={35}
            height={35}
            alt="Picture of the author"
          />
          <span className={`font-${font ?? 'semibold'} text-${size ?? 'lg'}`}>{text}</span>
        </div>
    )
}
export default IconTextItem