// npm i plaiceholder
// npm i @plaiceholder/next
import { getPlaiceholder } from "plaiceholder";
// then go to next config and change it to .mjs more info in plaiceholder.co
// fs-  filesystem - we dont use it if the file is dynamic like in this case that comes from a server.
import Image, { StaticImageData } from "next/image";

const Color = async ({ src }: { src: any }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { color } = await getPlaiceholder(buffer);

  return (
    <div>
      <h3>Dynamic Color import</h3>
      <div
        className="w-[300px] h-[300px] relative"
        style={{ backgroundColor: color.hex }}
      >
        <Image
          src={src}
          fill
          alt="red fish"
          className="object-cover w-[300px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default Color;
