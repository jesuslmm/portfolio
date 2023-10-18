"use client";

import AboutMe from "./parts/aboutMe";
import Presentation from "./parts/presentation";
import Projects from "./parts/projects";
import Contact from "./parts/contact";
import NavBar from "./header/navbar";
import { useState } from "react";

export default function Display() {
  const [lang, setLang] = useState("Español");

  const setEn = () => {
    if (lang == "Español") {
      setLang("Ingles");
    }
  };

  const setEs = () => {
    if (lang == "Ingles") {
      setLang("Español");
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
      <NavBar lang={lang} setEn={setEn} setEs={setEs} />
      <Presentation lang={lang} />
      <AboutMe lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
