"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectsArray } from "@/lib/utils";
import ScrollAnimation from "./framer";
import ProjectCardMobile from "./ProjectCardMobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8 md:gap-20 pt-32">
      <div className="flex w-full justify-between items-end">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="text-3xl md:text-5xl font-semibold">Portfólio</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3} duration={0.3} y={150}>
          <Link
            href="https://github.com/SantosVicente"
            className="flex text-sm md:text-lg gap-2 items-center border-b border-zinc-100"
            target="_blank"
          >
            Ver mais
            <ArrowRight size={18} className="transform scale-90 md:scale-100" />
          </Link>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 w-full gap-x-40 gap-y-24">
        <div className="block md:hidden">
          <ScrollAnimation delay={0.5} duration={0.3} y={150}>
            <Carousel className="w-full transform scale-[.8] md:scale-100 flex items-center justify-center">
              <CarouselContent className="flex gap-8 md:items-center md:justify-center">
                {projectsArray.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <ProjectCardMobile
                      key={index}
                      title={project.title}
                      description={project.description}
                      techs={project.techs}
                      projectImage={project.projectImage}
                      projectLink={project.projectLink}
                      index={index}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ScrollAnimation>
        </div>
        <div className="hidden md:flex gap-32 flex-col">
          {projectsArray.map((project, index) => (
            <ScrollAnimation delay={0.5} duration={0.3} y={150} key={index}>
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
    </div>
  );
}
