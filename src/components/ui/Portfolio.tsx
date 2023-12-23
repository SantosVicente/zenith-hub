import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsArray } from "@/lib/utils";
import ScrollAnimation from "./framer";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-20 pt-32">
      <div className="flex w-full justify-between items-end gap-44">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="text-5xl font-semibold">Portfólio</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3} duration={0.3} y={150}>
          <Link
            href="https://github.com/SantosVicente"
            className="flex text-lg gap-2 items-center border-b border-zinc-100"
            target="_blank"
          >
            Ver mais
            <ArrowRight size={18} className="" />
          </Link>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 w-full gap-x-40 gap-y-24">
        {projectsArray.map((project, index) => (
          <ScrollAnimation
            delay={0.5}
            duration={0.3}
            y={150}
            key={`scroll-${index}`}
          >
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              projectImage={project.projectImage}
              projectLink={project.projectLink}
              index={index}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
