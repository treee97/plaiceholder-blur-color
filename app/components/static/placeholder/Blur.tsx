// npm i plaiceholder
// npm i @plaiceholder/next
import { getPlaiceholder } from "plaiceholder";
// then go to next config and change it to .mjs more info in plaiceholder.co
import fs from "node:fs/promises";
// filesystem
import Image, { StaticImageData } from "next/image";

const Blur = async ({ src }: { src: string }) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div>
      <h3>Static blur import</h3>
      <div className="w-[300px] h-[300px]  relative">
        <Image
          src={src}
          fill
          alt="red fish"
          className="object-cover w-[300px] h-[300px]"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
};

export default Blur;
