import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsArray } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-20">
      <div className="flex w-full justify-between items-end gap-44">
        <h1 className="text-5xl font-semibold">Portfólio</h1>

        <Link
          href="https://github.com/SantosVicente"
          className="flex text-lg gap-2 items-center border-b border-zinc-100"
          target="_blank"
        >
          Ver mais
          <ArrowRight size={18} className="" />
        </Link>
      </div>

      <div className="grid grid-cols-1 w-full gap-x-40 gap-y-24">
        {projectsArray.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techs={project.techs}
            projectImage={project.projectImage}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
}
