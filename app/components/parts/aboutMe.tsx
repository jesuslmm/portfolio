"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AboutMe() {
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
          alt="yo 2"
          src="/images/myself.png"
          width={250}
          height={200}
        />
      </div>
      <div
        id="text"
        className="text-white lg:mt-40 text-5xl font-bold text-center"
      >
        <p className="text-yellow-600 lg:mr-28">About me</p>
        <p className="text-lg font-normal lg:pb-28 lg:pr-32 p-6 ">
          Hi, Im Jesus Molina, a web programmer from Venezuela. Im passionate
          about creating beautiful and user-friendly websites that use the
          latest technologies. I have a strong understanding of HTML, CSS, and
          JavaScript, and Im proficient in React, TailwindCSS, Prisma, but my
          favorite being Next.js. I have experience with a databases like
          PostgreSQL. Im confident that I can create websites that meet your
          needs. Im a hard worker and Im always willing to learn new things. Im
          also a great communicator and Im able to work well with others. If you
          are interested in working with me, please feel free to contact me. I
          will be happy to discuss your project and see how I can help.
        </p>
      </div>
    </div>
  );
}
