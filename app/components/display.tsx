"use client";

import AboutMe from "./parts/aboutMe";
import Presentation from "./parts/presentation";
import Projects from "./parts/projects";
import Contact from "./parts/contact";

export default function Display() {
  return (
    <div>
      <Presentation />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
