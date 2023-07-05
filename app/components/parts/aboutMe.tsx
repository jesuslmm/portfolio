"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AboutMe() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("myDiv");
      const text = document.getElementById("text");
      const image = document.getElementById("image");
      const position = element?.getBoundingClientRect();

      if (position?.top && position?.bottom) {
        if (position.top <= window.innerHeight && position.bottom >= 0) {
          text?.classList.add("animate-fadeInText");
          text?.classList.remove("opacity-0");
          image?.classList.add("animate-fadeInPhoto");
          image?.classList.remove("opacity-0");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="myDiv"
      className=" h-screen bg-black grid grid-cols-2 overflow-hidden "
    >
      <div id="image" className="flex items-center justify-center opacity-0">
        <Image
          className="absolute justify-center items-center mt-4"
          alt="yo 2"
          src="/images/kanna.jpg"
          width={250}
          height={200}
        />
      </div>
      <div id="text" className="text-white mt-40 text-5xl font-bold opacity-0">
        <p className="text-yellow-600">About me</p>
        <p className="text-lg font-normal mt-11 pr-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
