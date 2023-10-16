"use client";
//bc we use the ref the file needs to be client side
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Slide = ({ src }: { src: string }) => {
  // returns the ref and a inview boolean.
  // function will only get triggered once. at the beginning
  // inview is false but becomes true when image appears on windows. If we wanted it to go back to false it means that we want an animation for when the element exits the view.
  //threshold is 0.5 means that we're gonna wait until the ref is 50% visible on the screen for the inview to go true
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <h3>Custom Slide</h3>
      <div ref={ref} className="w-[300px] h-[300px] relative overflow-hidden">
        {/* overflow hidden to hide he pink div sliding away  */}
        <Image
          src={src}
          fill
          alt="red fish"
          className={`object-cover w-[300px] h-[300px] ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`bg-pink-700 w-full h-full relative z-[1] top-0 ${
            inView ? "left-full" : "left-0"
          }`}
          style={{
            transition: "left 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Slide;
