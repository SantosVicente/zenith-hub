import Image from "next/image";
import macbookMenu from "../../assets/images/macbook-buttons.png";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: any[];
  projectImage: any;
  projectLink: string;
}

export default function ProjectCard({
  title,
  description,
  techs,
  projectImage,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-700 p-5 rounded-xl flex flex-col gap-4">
      <div>
        <Image src={macbookMenu} alt="macbook menu" className="h-4 w-auto" />
      </div>

      <h1 className="text-lg font-black">{title}</h1>

      <p className="text-zinc-300 text-lg text-justify">{description}</p>

      <div className="flex gap-2 ">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="text-zinc-300 text-xs border border-zinc-300 rounded-md px-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <Image
        src={projectImage}
        alt="project image"
        width={0}
        height={0}
        className="rounded-sm h-auto w-full object-contain"
        sizes="100vw"
      />
    </div>
  );
}
