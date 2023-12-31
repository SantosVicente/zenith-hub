"use client";

import Image from "next/image";
import macbookMenu from "../../assets/images/macbook-buttons.png";
import { useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: any[];
  projectImage: any;
  projectLink: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  techs,
  projectImage,
  projectLink,
  index,
}: ProjectCardProps) {
  return (
    <div
      className={`w-full flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      <div className="w-2/3 flex h-[125%] items-center">
        <div className="p-6 bg-zinc-100 text-black flex flex-col h-full rounded-lg gap-[10%] justify-center pr-28">
          <div>
            <h1 className="font-bold text-3xl">Teste de Titulo</h1>
          </div>
          <div>
            <p className="text-sm text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              odio accusantium velit. Dolore quae provident hic quo quidem minus
              sed sint corrupti consequatur, reiciendis officia aspernatur cum
              facere odio? Libero!
            </p>
          </div>
          <div className="flex justify-between px-2">
            <div>some icons</div>
            <div>
              <button>Teste</button>
            </div>
          </div>
        </div>
        <div className="z-10 rounded-3xl h-[70%] aspect-video -ml-20 w-full object-contain bg-img hover:scale-105 transition-all cursor-pointer flex items-center justify-center">
          <h1 className="h1">
            <span>reveal</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
