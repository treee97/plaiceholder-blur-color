import Image, { StaticImageData } from "next/image";

// fill forces the image to fill their parent
// object cover doesnt work if the parent isnt relative. its like if it was on absolute. the picture
// https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
const DefaultBlur = ({ src }: { src: StaticImageData }) => {
  return (
    <div>
      <h3>Static default blur</h3>
      <div className="w-[300px] h-[300px]  relative">
        <Image
          src={src}
          fill
          alt="red fish"
          className="object-cover w-[300px] h-[300px]"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default DefaultBlur;
