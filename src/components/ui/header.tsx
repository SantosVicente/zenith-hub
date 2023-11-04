"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../assets/images/logo_sem_fundo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { User2 } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-12 px-16 my-2 grid grid-cols-3 ">
      <Image src={Logo} alt="logo Zenith HUB" width="300" />

      <div className="flex gap-6 items-center justify-center">
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Home
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Integrantes
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="p-0">
              <Link
                href="/integrantes/santosvicente"
                className="w-full h-full p-2"
              >
                SantosVicente
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Link href="/integrantes/integer2" className="w-full h-full p-2">
                Integrante2
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="#about"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Sobre Nós
        </Link>

        <Link
          href="#mainObjectives"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Objetivos
        </Link>

        <Link
          href="#expertiseAreas"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          Áreas
        </Link>

        <Link
          href="#faqs"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          {`FAQ's`}
        </Link>
      </div>

      <div className="flex items-center justify-end mr-2">
        <Link href="#contato">
          <Button
            variant="outline"
            className="flex items-center gap-1 bg-[#14101b] opacity-75"
          >
            <User2 size={20} />
            Contato
          </Button>
        </Link>
      </div>
    </header>
  );
}
