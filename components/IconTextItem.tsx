import Image from "next/image";


const IconTextItem = ({src, text, textSize, font, margin, alt, spacing}: {src:string, text:string, textSize?:string, font?:string, margin?:string, alt?:string, spacing?: number}) => {
    return (
        <div className={`flex items-center space-x-${spacing ?? 5} my-${margin ?? 5}`}>
          <Image
            src={src}
            width={35}
            height={35}
            alt={alt ? alt : ''}
          />
          <span className={`font-${font ?? 'semibold'} text-${textSize ?? 'lg'}`}>{text}</span>
        </div>
    )
}
export default IconTextItem