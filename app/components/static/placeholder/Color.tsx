// npm i plaiceholder
// npm i @plaiceholder/next
import { getPlaiceholder } from "plaiceholder";
// then go to next config and change it to .mjs more info in plaiceholder.co
import fs from "node:fs/promises";
// filesystem
import Image, { StaticImageData } from "next/image";
interface Props {
  src: any;
}

const Color = async ({ src }: Props) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { color } = await getPlaiceholder(buffer);

  return (
    <div>
      <h3>Static Color import</h3>
      <div
        style={{ backgroundColor: color.hex }}
        className="w-[300px] h-[300px] border relative"
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
