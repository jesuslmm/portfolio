import fs from "fs";
import path from "path";
import { NextResponse, NextRequest } from "next/server";

const filePath = path.resolve("./projects.json");

type project = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  video: string;
};

export async function POST(req: Request) {
  const name = await req.json();

  let projects: project[] | undefined = [];

  const data = fs.readFileSync(filePath, "utf-8");

  projects = JSON.parse(data);

  const selectedProject: project | undefined = projects!.find(
    (project) => project.name === name
  );

  if (!selectedProject) {
    return NextResponse.json({ message: "error" });
  }

  console.log(selectedProject);

  return NextResponse.json(selectedProject);
}
