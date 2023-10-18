"use client";

import { useEffect } from "react";
import Image from "next/image";
import { projectEnglish, projectoEspañol } from "../textLg";

export default function AboutMe({ lang }: { lang: string }) {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
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
      id="about"
      className="h-full bg-black grid lg:grid-cols-2 overflow-hidden grid-cols-1 "
    >
      <div id="image" className="flex items-center justify-center pb-5 ">
        <Image
          className="lg:absolute justify-center items-center lg:mt-4 mt-10"
          alt="yo"
          src="/images/myself/myself.png"
          width={250}
          height={200}
        />
      </div>
      <div
        id="text"
        className="text-white lg:mt-40 text-5xl font-bold text-center"
      >
        <p className="text-yellow-600 lg:mr-28">
          {" "}
          {lang == "Español"
            ? projectoEspañol.myself
            : projectEnglish.myself}{" "}
        </p>
        <p className="text-lg font-normal lg:pb-28 lg:pr-32 p-6 ">
          {lang == "Español"
            ? projectoEspañol.presentation
            : projectEnglish.presentation}{" "}
        </p>
      </div>
    </div>
  );
}
