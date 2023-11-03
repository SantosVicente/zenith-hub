import Image from "next/image";
import Gif from "../../assets/gifs/heart.gif";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-44">
      <div className="flex w-full justify-between items-end gap-44">
        <h1 className="text-5xl font-semibold">Portfólio</h1>

        <Link
          href="https://github.com/SantosVicente"
          className="flex text-lg gap-2 items-center border-b border-zinc-100"
        >
          Ver mais
          <ArrowRight size={18} className="" />
        </Link>
      </div>

      <div>a</div>
    </div>
  );
}
