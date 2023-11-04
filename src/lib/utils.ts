import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projectsArray = [
  {
    title: "Projeto 1",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Java", "Spring Boot"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
  {
    title: "Projeto 2",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Python"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
  {
    title: "Projeto 3",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Prisma ORM", "Node.js"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
  {
    title: "Projeto 4",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Node.js", "Nest.js"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
  {
    title: "Projeto 5",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Vite.js", "Shadcn/UI"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
  {
    title: "Projeto 6",
    description:
      "Este é um exemplo de card de exibição de projeto para a página do portfólio",
    techs: ["Next.js", "TailwindCSS"],
    projectImage: "https://placehold.co/600x350",
    projectLink: "http://github.com/SantosVicente/SysVote",
  },
];
