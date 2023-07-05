"use client";

import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import FindProjectData from "@/app/components/getProject";

type project = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  video: string;
  code_link: string;
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export default function ProjectDisplay({
  projectInfo,
}: {
  projectInfo: project;
}) {
  const [project] = useState<project>(projectInfo);

  return (
    <div className="h-screen">
      <>
        <Image
          alt="project"
          src={project?.image as string}
          className="absolute inset-0 object-cover w-full h-full"
          height={300}
          width={300}
        />
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="absolute text-white top-48 ml-12">
          <h2 className="font-bold text-6xl mb-11">{project?.name}</h2>
          <h4 className="text-xl font-medium mb-10">
            {project?.short_description}
          </h4>
          <p className="w-2/5 text-lg font-extralight">
            {project?.description}
          </p>
        </div>
        <div className="absolute right-44 text-white top-48">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=wz1U3O7TzcQ&t=3s"
            playing={true}
            muted={true}
            loop={true}
            controls={true}
          />
          <button className="flex bg-black px-5 py-3 mt-6 rounded-lg hover:scale-110 transition-all">
            <Image
              className="left-0 -mt-2.5 absolute "
              src="/images/github.png"
              alt="github"
              width={45}
              height={45}
            />
            <p className="flex ml-6 font-medium">Code</p>
          </button>
        </div>
      </>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const projects = ["Todo-app", "Auctions", "Pokemon-quiz"];
  const paths = projects.map((project) => {
    return {
      params: { project },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  console.log("??????");
  const { name } = context.params as Params;
  const projectInfo = FindProjectData(name);
  console.log(projectInfo);
  return {
    props: {
      projectInfo,
    },
  };
};
