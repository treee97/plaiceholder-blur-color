"use client";
//bc we use the ref the file needs to be client side
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Opacity = ({ src }: { src: string }) => {
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
      <h3>Custom in-view with opacity</h3>
      <div
        ref={ref}
        className="w-[300px] h-[300px] relative"
        style={{ backgroundColor: "#e9c6b0" }}
      >
        <Image
          src={src}
          fill
          alt="red fish"
          className={`object-cover w-[300px] h-[300px] ${
            inView ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        />
      </div>
    </div>
  );
};

export default Opacity;
