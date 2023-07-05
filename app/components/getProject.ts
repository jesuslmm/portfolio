type project = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  video: string;
  code_link: string;
};

const projectData = [
  {
    name: "Todo-app",
    short_description: "Website for tasks, where you can manage your tasks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/projects/todo.jpeg",
    video: "https://www.youtube.com/watch?v=wz1U3O7TzcQ&t=3s",
    code_link: "https://github.com/jesuslmm/todo-app",
  },
  {
    name: "Auctions",
    short_description:
      "Website for Auctions, where you can offer and bid for items",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/projects/auct.jpg",
    video: "https://www.youtube.com/watch?v=wz1U3O7TzcQ&t=3s",
    code_link: "https://github.com/jesuslmm/Auctions-app",
  },
  {
    name: "Pokemon-quiz",
    short_description:
      "Website for a Pokemon quiz, where you can play and make an score",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/projects/pokemonquiz.jpg",
    video: "https://www.youtube.com/watch?v=wz1U3O7TzcQ&t=3s",
    code_link: "https://github.com/jesuslmm/Pokemon-quiz",
  },
];

export default function FindProjectData(name: string) {
  const projectInfo = projectData.find((project) => project.name == name);
  return projectInfo as project;
}
