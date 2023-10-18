import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import "flowbite";
import { projectEnglish, projectoEspañol } from "../textLg";

export default function NavBar({
  lang,
  setEn,
  setEs,
}: {
  lang: string;
  setEn: () => void;
  setEs: () => void;
}) {
  const [navbar, setNavbar] = useState(false);

  const ChangeLang = () => {
    if (lang == "Español") {
      setEn();
    } else {
      setEs();
    }
  };

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex">
                <Link href="#main">
                  <h2 className="text-2xl text-yellow-500 font-bold hover:scale-105 transition-all hover:text-yellow-700">
                    JESUSLMM
                  </h2>
                </Link>
                <Image
                  className="ml-6 mt-1 text-sm  mr-auto w-6 h-6 rounded-full"
                  src={
                    lang == "Ingles"
                      ? "/images/navbar/flags/en.png"
                      : "/images/navbar/flags/es.png"
                  }
                  alt="lang"
                  width={60}
                  height={60}
                />
                <button
                  onClick={() => ChangeLang()}
                  className="pl-2 text-sm rounded-full mr-auto"
                  type="button"
                >
                  <span className="sr-only">Open the language menu</span>
                  <ArrowPathRoundedSquareIcon className=" h-6 w-6 text-white opacity-70 hover:scale-110 hover:opacity-90 transition-all" />
                </button>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none
                   focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/images/navbar/close.png"
                      width={30}
                      height={30}
                      alt="close-button"
                    />
                  ) : (
                    <Image
                      src="/images/navbar/entra2.png"
                      width={30}
                      height={30}
                      alt="menu-button"
                      className="focus: border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mt-4 font-semibold">
                <li
                  className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0
                 hover:bg-yellow-600 border-yellow-600 md:hover:text-yellow-600 md:hover:bg-transparent transition-all"
                >
                  <Link
                    href="#about"
                    scroll={false}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {lang == "Ingles"
                      ? projectEnglish.navbar1
                      : projectoEspañol.navbar1}
                  </Link>
                </li>
                <li
                  className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0
                 hover:bg-yellow-600 border-yellow-600 md:hover:text-yellow-600 md:hover:bg-transparent transition-all"
                >
                  <Link
                    scroll={false}
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {lang == "Ingles"
                      ? projectEnglish.navbar2
                      : projectoEspañol.navbar2}
                  </Link>
                </li>
                <li
                  className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0
                 hover:bg-yellow-600 border-yellow-600 md:hover:text-yellow-600 md:hover:bg-transparent transition-all"
                >
                  <Link
                    href="#contact"
                    scroll={false}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {lang == "Ingles"
                      ? projectEnglish.navbar3
                      : projectoEspañol.navbar3}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
