import DefaultBlur from "./components/static/DefaultBlur";
import tree from "../public/download.jpg";
import StaticPlaceholderBlur from "@/app/components/static/placeholder/Blur";
import StaticPlaceholderColor from "@/app/components/static/placeholder/Color";

import DynamicPlaiceholderBlur from "@/app/components/dynamic/Blur";
import DynamicPlaiceholderColor from "@/app/components/dynamic/Color";

import CustomOpacity from "@/app/components/custom/Opacity";
import CustomSlide from "@/app/components/custom/Slide";

export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <h1 className="text-4xl mb-4">Image in NextJS</h1>

      <h2 className="text-2xl mb-4">Static import CTRL + SHFT + R </h2>
      <div className=" w-full flex flex-wrap">
        {/* blur by default ctrl + shift + r to clear cache and see it happen */}
        <DefaultBlur src={tree} />
        {/*static import with plaiceholder  */}
        <StaticPlaceholderBlur src="/download.jpg" />

        {/* {static import with color with plaiceholder} */}
        <StaticPlaceholderColor src="/download.jpg" />
      </div>

      <h2 className="text-2xl mb-4 mt-4">Dynamic import CTRL + SHFT + R </h2>
      <div className=" w-full flex flex-wrap">
        {/* dynamic import with blur in plaiceholder */}
        <DynamicPlaiceholderBlur src="https://images.unsplash.com/photo-1697179426897-75090343fe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />

        {/* dynamic import w color in plaiceholder */}
        <DynamicPlaiceholderColor src="https://images.unsplash.com/photo-1697179426897-75090343fe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
      </div>

      <h2 className="text-2xl mb-4 mt-4">
        Dynamic import Custom (also works with static)
      </h2>
      <div className=" w-full flex flex-wrap">
        {/*  custom opacity import works as static and dynamic*/}
        <CustomOpacity src="https://images.unsplash.com/photo-1697179426897-75090343fe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
        <CustomSlide src="https://images.unsplash.com/photo-1697179426897-75090343fe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
      </div>
    </main>
  );
}
