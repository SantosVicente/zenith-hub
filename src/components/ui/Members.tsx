"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Plus } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
const InterText = Inter({ subsets: ["latin"] });

const Items = [
  {
    pfp: "https://placehold.co/400x400",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam animi accusamus explicabo veniam nisi possimus!",
    name: "Clara",
    cargo: "CTO",
    link: "http://github.com",
  },
  {
    pfp: "https://placehold.co/400x400",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam animi accusamus explicabo veniam nisi possimus!",
    name: "Gabriel",
    cargo: "CEO",
    link: "http://github.com",
  },
  {
    pfp: "https://placehold.co/400x400",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam animi accusamus explicabo veniam nisi possimus!",
    name: "Elias",
    cargo: "CDO",
    link: "http://github.com",
  },
];

export default function Members() {
  return (
    <div className="flex flex-col gap-12 2xl:gap-24 w-full items-center pt-5">
      <h1 className="text-4xl 2xl:text-5xl font-semibold max-w-5xl w-full text-center pt-28">
        Nossos membros
      </h1>

      <Carousel className="w-full transform scale-[.8] 2xl:scale-100 flex items-center justify-center">
        <CarouselContent className="flex gap-8 md:gap-12 xl:gap-8 xl:items-center xl:justify-center">
          {Items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pt-24 basis-full md:basis-[30%] xl:basis-1/4"
            >
              <div className="relative bg-zinc-200 bg-opacity-30 flex flex-col gap-10 p-8 pt-24 rounded-3xl">
                <Image
                  src={item.pfp}
                  alt="image"
                  width={0}
                  height={0}
                  className="object-contain absolute w-44 h-44 flex rounded-full -top-24 left-1/2 transform -translate-x-1/2"
                />

                <p
                  className={`${InterText.className} text-justify text-xl text-zinc-50 font-semibold pt-6 h-44`}
                >
                  {item.description}
                </p>

                <div className="flex items-center pt-4 justify-between text-[#14101b]">
                  <span className="text-xl font-bold text-justify">
                    {item.name} - {item.cargo}
                  </span>

                  <Link
                    href={item.link}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100"
                  >
                    <Plus size={27} />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
