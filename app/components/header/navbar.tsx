import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="#main">
                <h2 className="text-2xl text-yellow-500 font-bold">JESUSLMM</h2>
              </Link>
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
                    About
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
                    Projects
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
                    Contact
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
