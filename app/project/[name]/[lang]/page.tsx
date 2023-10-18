"use client";

import Image from "next/image";
import FindProjectData from "@/app/components/getProject";
import Link from "next/link";
import { useRouter } from "next/navigation";

type project = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  video: string;
  code_link: string;
};

interface PageProps {
  params: { name: string; lang: string };
}

export default function ProjectDisplay({ params }: PageProps) {
  const project: project = getProject(params);

  const lang = params.lang;

  const router = useRouter();

  return (
    <div className="h-screen grid lg:grid-cols-1">
      <Image
        alt="project"
        src={project.image as string}
        className="absolute inset-0 object-fill w-full h-full"
        height={300}
        width={300}
      />
      <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
      <div
        onClick={() => router.push("/#projects")}
        className="flex absolute left-4 top-3 text-yellow-500 lg:text-2xl font-semibold hover:scale-105 hover:text-yellow-700
      cursor-pointer gap-3 ml-4 mt-3 transition-all z-50"
      >
        <Image
          className="-mt-1"
          src="/images/navbar/backwards.png"
          alt="backwards-arrow"
          height={30}
          width={30}
        />
        <p>{lang == "Ingles" ? "Projects" : "Proyectos"}</p>
      </div>
      <div
        className="xl:absolute text-white z-50 text-center xl:top-48 xl:ml-12 
      xl:text-left mt-14"
      >
        <h2 className="font-bold xl:text-6xl lg:text-5xl text-4xl">
          {project.name}
        </h2>
        <h4 className="xl:w-1/3 text-xl font-medium mb-4 text-center xl:text-left px-8 lg:px-0">
          {project.short_description}
        </h4>
        <p className="xl:w-2/6 xl:p-0 px-14 text-lg font-extralight ">
          {project.description}
        </p>
      </div>
      <div
        className="xl:absolute md:right-16 text-white md:top-28 md:z-50 
       lg:pl-10 flex justify-center items-center"
      >
        <video
          autoPlay
          loop
          className="flex justify-center items-center z-50 xl:h-[500px] xl:w-[700px] xl:-mt-0
          md:h-[600px] md:w-[600px]
          lg:h-[400px] lg:w-[700px] md:-mt-32
          sm:h-[300px] sm:w-[570px] sm:-mt-72
          h-[200px] w-[320px]
          "
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <Link
          className="absolute xl:bottom-0 xl:left-10 xl:top-auto
            lg:bottom-2 md:bottom-12 sm:bottom-8 bottom-2
            bg-black px-5 py-3 mt-6 rounded-lg hover:scale-110 transition-all z-50 sm:opacity-100 opacity-40 "
          target="_blank"
          href={project.code_link}
        >
          <button>
            <Image
              className="lg:left-0 xl:ml-0 -ml-5 lg:-ml-0 -mt-2.5 absolute "
              src="/images/github.png"
              alt="github"
              width={45}
              height={45}
            />
            <p className="flex ml-6 font-medium">
              {lang == "Ingles" ? "Code" : "Codigo"}
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = ["Todo-app", "Auctions", "Pokemon-quiz", "Wordle"];
  const lang = ["Español", "Ingles"];
  let params = [];

  for (let j = 0; j < lang.length; j++) {
    for (let i = 0; i < projects.length; i++) {
      params.push({ name: projects[i], lang: lang[j] });
    }
    return params;
  }
}

function getProject(params: { name: string; lang: string }) {
  const projectInfo = FindProjectData(params);
  return projectInfo;
}
