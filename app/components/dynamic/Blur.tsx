// npm i plaiceholder
// npm i @plaiceholder/next
import { getPlaiceholder } from "plaiceholder";
// then go to next config and change it to .mjs more info in plaiceholder.co
// fs-  filesystem - we dont use it if the source is dynamic like in this case that comes from a server.
import Image, { StaticImageData } from "next/image";

const Blur = async ({ src }: { src: any }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div>
      <h3>Dynamic blur import</h3>
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
