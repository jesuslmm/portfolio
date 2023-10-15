"use client";

import AboutMe from "./parts/aboutMe";
import Presentation from "./parts/presentation";
import Projects from "./parts/projects";
import Contact from "./parts/contact";
import NavBar from "./header/navbar";

export default function Display() {
  return (
    <div className="overflow-x-hidden w-full">
      <NavBar />
      <Presentation />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
