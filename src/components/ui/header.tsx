"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../assets/images/logo_sem_fundo.png";
import Link from "next/link";
import {
  AlertOctagon,
  AreaChart,
  ClipboardCheck,
  FolderGit2,
  HelpCircle,
  MailCheck,
  Menu,
  User2,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

export default function Header() {
  return (
    <header className="w-full h-12 pl-4 pr-8 md:px-16 my-4 flex items-center justify-between md:grid md:grid-cols-3">
      <Image
        src={Logo}
        alt="logo Zenith HUB"
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-52 md:w-72"
      />

      <div className="hidden md:flex gap-6 items-center mt-2 h-full justify-center">
        <Link
          href="#members"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          Integrantes
        </Link>

        <Link
          href="#about"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          Sobre Nós
        </Link>

        <Link
          href="#portfolio"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          Portfólio
        </Link>

        <Link
          href="#mainObjectives"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          Objetivos
        </Link>

        <Link
          href="#expertiseAreas"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          Áreas
        </Link>

        <Link
          href="#faqs"
          className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
        >
          {`FAQ's`}
        </Link>
      </div>

      <div className="hidden md:flex items-end h-full justify-end mr-2 -mt-1">
        <Link href="#contact">
          <Button
            variant="outline"
            className="flex items-center gap-1 bg-[#14101b] opacity-75 transform hover:scale-110 transition-all"
          >
            <User2 size={20} />
            Contato
          </Button>
        </Link>
      </div>

      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="cursor-pointer">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent className="w-[350px] flex gap-4 flex-col">
            <SheetHeader className="text-left text-lg pb-8 font-semibold">
              Menu
            </SheetHeader>
            <SheetClose asChild>
              <Link
                href="#members"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <User2 size={20} />
                  Integrantes
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#about"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <AlertOctagon size={20} />
                  Sobre Nós
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#portfolio"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <FolderGit2 size={20} />
                  Portfólio
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#mainObjectives"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ClipboardCheck size={20} />
                  Objetivos
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#expertiseAreas"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <AreaChart size={20} />
                  Áreas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#faqs"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HelpCircle size={20} />
                  {`FAQ's`}
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="#contact"
                className="text-zinc-400 hover:text-zinc-100 transform hover:scale-110 transition-all"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <MailCheck size={20} />
                  Contato
                </Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
