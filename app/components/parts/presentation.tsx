import Image from "next/image";
import { useState, useEffect } from "react";

export default function Presentation() {
  const [isXs, setIsXs] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 575px)");
    media.addEventListener("change", () => {
      setIsXs(media.matches);
    });

    const media1 = window.matchMedia(
      "(min-width: 576px) and (max-width:: 767px)"
    );
    media1.addEventListener("change", () => {
      setIsMd(media1.matches);
    });

    const media2 = window.matchMedia(
      "(min-width: 768px) and (max-width: 1031px)"
    );
    media2.addEventListener("change", () => {
      setIsLg(media2.matches);
    });

    const media3 = window.matchMedia("(min-width: 1032px)");
    media3.addEventListener("change", () => {
      setIsXl(media3.matches);
    });

    setIsXs(media.matches);
    setIsMd(media1.matches);
    setIsLg(media2.matches);
    setIsXl(media3.matches);
  }, []);

  return (
    <div id="main">
      <div className="relative h-screen flex">
        <div className="lg:w-3/5 h-screen w-full bg-gray-600 ">
          <div className="py-36 text-6xl font-extrabold text-slate-800 text-center">
            <h1>
              Fullstack <br />
              Developer{" "}
            </h1>
            <p className="text-2xl text-white font-normal hidden md:block relative top-24">
              Im a crafter of{" "}
              <span className="font-extrabold text-white">GOOD </span>
              and
              <span className="font-extrabold text-white"> SOLID </span>
              fullstack products
            </p>
            <p className="text-xl hidden lg:block relative top-32 lg:mx-8 mx-32 text-white font-normal">
              I am a creative and resourceful programmer with a strong
              understanding of software development principles. I am passionate
              about solving problems and creating innovative solutions.
            </p>

            <p className="text-lg md:hidden text-white relative top-10">
              Im a crafter of GOOD and SOLID fullstack products
            </p>
          </div>
          <div className="grid grid-cols-5 xl:p-16 lg:p-20 py-52 md:p-20 md:mt-0">
            <p className="font-bold text-2xl">Main stack:</p>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Next.js Logo"
                src="/images/nextLogo.png"
                width={100}
                height={100}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Typescript Logo"
                src="/images/tsLogo.png"
                width={120}
                height={120}
              />
            </div>
            <div className="px-3 mt-4 animate-trans-top-1">
              <Image
                alt="TailwindCSS Logo"
                src="/images/tailwindLogo.png"
                width={120}
                height={120}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="PostgreSQL Logo"
                src="/images/PostgreSQL.png"
                width={110}
                height={110}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute lg:right-96 lg:top-36
        md:right-40 md:top-56
        right-3 top-96"
        >
          <p className="rotate-6 font-bold text-white text-right py-6 text-2xl">
            <span className="hover:animate-bounce">👋</span>
            Hi! Im Jesús
          </p>
        </div>
        <div className="w-2/5 h-full bg-slate-800 hidden sm:block">
          <Image
            className="w-full h-full "
            src="/images/trying/squigly.png"
            alt="squares"
            width={500}
            height={300}
          />
        </div>
        <div
          className="absolute right-40 bottom-44
        md:bottom-56 md:right-0
        lg:right-44 lg:top-52
        xl:right-72 xl:top-52"
        >
          {isXl ? (
            <Image
              src="/images/myself/svpotrait.png"
              alt="stardew valley potrait"
              width={320}
              height={320}
            />
          ) : isLg ? (
            <Image
              src="/images/myself/svpotrait.png"
              alt="stardew valley potrait"
              width={250}
              height={250}
            />
          ) : isMd ? (
            <Image
              src="/images/myself/svpotrait.png"
              alt="stardew valley potrait"
              width={250}
              height={320}
            />
          ) : isXs ? (
            <Image
              src="/images/myself/svpotrait.png"
              alt="stardew valley potrait"
              width={220}
              height={220}
            />
          ) : (
            <Image
              src="/images/myself/svpotrait.png"
              alt="stardew valley potrait"
              width={200}
              height={200}
            />
          )}
        </div>
      </div>
    </div>
  );
}
