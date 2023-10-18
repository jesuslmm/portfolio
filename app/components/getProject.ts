type project = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  video: string;
  code_link: string;
};

const projectDataEn = [
  {
    name: "Todo-app",
    short_description: "Website for tasks, where you can manage your tasks",
    description:
      "A tasks application, with login based in Github and linkedin authentification, it has 2 parts, where you cand add tasks, and the other one is to manage this tasks, to check if you have pending tasks, mark if you have finished one, and delete it after finish it. this was made with Next.js, Typescript, TailwindCSS, PostgreSQL and Prisma",
    image: "/images/projects/to-do-list.png",
    video: "/videos/Todo.mp4",
    code_link: "https://github.com/jesuslmm/todo-app",
  },
  {
    name: "Auctions",
    short_description:
      "Website for Auctions, where you can offer and bid for items",
    description:
      "Auctions app lets you create and bid on auctions. You can set the initial price, final time, category, and image for your auction. You can search for auctions by the main page, search bar, or categories. You can add auctions to favorites to track their progress. When an auction ends, you'll be notified if you won.",
    image: "/images/projects/auct.jpg",
    video: "/videos/Auctions.mp4",
    code_link: "https://github.com/jesuslmm/Auctions-app",
  },
  {
    name: "Pokemon-quiz",
    short_description: "Website for a Pokemon quiz",
    description:
      "Pokemon Quiz is an app that challenges you to name Pokemon. You will be presented with a picture of a Pokemon and four choices, only one of which is the correct name. If you answer correctly, you will score a point. If you answer incorrectly, you will lose a live. You have three lives total. It ends when you run out of lives.",
    image: "/images/projects/pokemonquiz.jpg",
    video: "/videos/Pokemon-Quiz.mp4",
    code_link: "https://github.com/jesuslmm/Pokemon-quiz",
  },
  {
    name: "Wordle",
    short_description: "Website for a Wordle game",
    description:
      "This website is a type of clone of the famous webgame Wordle, You need to guess the word in 5 chances, you can replay it everytime you want",
    image: "/images/projects/wordle-en.jpeg",
    video: "/videos/Wordle.mp4",
    code_link: "https://github.com/jesuslmm/Wordle",
  },
];

const projectDataEs = [
  {
    name: "Todo-app",
    short_description: "Gestor de tareas web",
    description:
      "Una aplicación de gestion de tareas, con inicio de sesión basado en la autenticación de GitHub y LinkedIn, Esta dividida en 2 partes: una donde puedes agregar tareas y la otra para administrar estas tareas, para verificar si tienes tareas pendientes, marcar si has terminado una y eliminarla después de terminarla. Fue hecha con Next.js, TypeScript, TailwindCSS, PostgreSQL y Prisma.",
    image: "/images/projects/to-do-list.png",
    video: "/videos/Todo.mp4",
    code_link: "https://github.com/jesuslmm/todo-app",
  },
  {
    name: "Auctions",
    short_description: "Sitio web de subastas",
    description:
      "Esta web de subastas te permite crear y pujar por subastas. Puedes establecer el precio inicial, la hora final, la categoría y la imagen de tu subasta. Puedes buscar estas en la página principal, en la barra de búsqueda o por categorías. Puedes añadir subastas a favoritos para seguir su progreso. Cuando finaliza una subasta, recibirás una notificación si has ganado.",
    image: "/images/projects/auct.jpg",
    video: "/videos/Auctions.mp4",
    code_link: "https://github.com/jesuslmm/Auctions-app",
  },
  {
    name: "Pokemon-quiz",
    short_description: "Sitio web sobre un quiz de Pokemon",
    description:
      "Pokemon Quiz es una web que te desafía a nombrar Pokémon. Se te presentará una imagen de un Pokémon y cuatro opciones, de las cuales solo una es el nombre correcto. Si respondes correctamente, obtendrás un punto. Si respondes incorrectamente, perderás una vida. Tienes tres vidas en total. El juego termina cuando te quedas sin vidas.",
    image: "/images/projects/pokemonquiz.jpg",
    video: "/videos/Pokemon-Quiz.mp4",
    code_link: "https://github.com/jesuslmm/Pokemon-quiz",
  },
  {
    name: "Wordle",
    short_description: "sitio web inspirado en Wordle",
    description:
      "Este sitio web es un clon del famoso juego web Wordle. Debes adivinar la palabra en 5 intentos y puedes volver a jugarlo cuando quieras.",
    image: "/images/projects/wordle-en.jpeg",
    video: "/videos/Wordle.mp4",
    code_link: "https://github.com/jesuslmm/Wordle",
  },
];

export default function FindProjectData(params: {
  name: string;
  lang: string;
}) {
  const { name, lang } = params;
  if (lang == "Ingles") {
    const projectInfo = projectDataEn.find((project) => project.name == name);
    return projectInfo as project;
  } else {
    const projectInfo = projectDataEs.find((project) => project.name == name);
    return projectInfo as project;
  }
}
