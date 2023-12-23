import { ClipboardList, Coffee, TrendingUp } from "lucide-react";
import { Inter } from "next/font/google";
import ScrollAnimation from "./framer";
const InterFont = Inter({ subsets: ["latin"] });

export default function MainObjectives() {
  return (
    <div className="flex flex-col gap-24 w-full items-center pt-32">
      <ScrollAnimation delay={0.1} duration={0.3} y={150}>
        <h1 className="hidden md:block text-5xl font-semibold max-w-5xl w-full text-center">
          Quais são os principais objetivos da Zenith ?
        </h1>
        <h1 className="block md:hidden text-3xl font-semibold max-w-5xl w-full">
          Objetivos da Zenith
        </h1>
      </ScrollAnimation>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 text-[#14101b]">
        <ScrollAnimation delay={0.3} duration={0.3} y={150}>
          <div className="relative bg-zinc-200 flex flex-col gap-4 p-8 pt-24 h-full">
            <div className="absolute w-24 h-24 flex items-center justify-center bg-zinc-950 rounded-full -top-12 left-1/2 transform -translate-x-1/2">
              <ClipboardList size={50} className="text-zinc-200" />
            </div>

            <h2
              className={`${InterFont.className} uppercase text-3xl font-bold`}
            >
              Fomentar a Inovação
            </h2>
            <p className="text-lg text-justify">
              Buscamos constantemente novas maneiras de aplicar a tecnologia
              para resolver problemas reais e impulsionar a inovação. Nosso
              objetivo é contribuir para competições e feiras científicas
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4} duration={0.3} y={150}>
          <div className="relative bg-zinc-200 flex flex-col gap-4 p-8 pt-24 h-full">
            <div className="absolute w-24 h-24 flex items-center justify-center bg-zinc-950 rounded-full -top-12 left-1/2 transform -translate-x-1/2">
              <TrendingUp size={50} className="text-zinc-200" />
            </div>
            <h2
              className={`${InterFont.className} uppercase text-3xl font-bold`}
            >
              Desenvolver Talentos
            </h2>
            <p className="text-lg text-justify">
              Nossa missão é ajudar os membros a aprimorar suas habilidades e
              conhecimentos em tecnologia, preparando-os para um futuro
              promissor incentivando o trabalho em equipe
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.5} duration={0.3} y={150}>
          <div className="relative bg-zinc-200 flex flex-col gap-4 p-8 pt-24 h-full">
            <div className="absolute w-24 h-24 flex items-center justify-center bg-zinc-950 rounded-full -top-12 left-1/2 transform -translate-x-1/2">
              <Coffee size={50} className="text-zinc-200 ml-1" />
            </div>
            <h2
              className={`${InterFont.className} uppercase text-3xl font-bold`}
            >
              Impactar a Comunidade
            </h2>
            <p className="text-lg text-justify">
              Queremos criar um impacto positivo na sociedade, seja através de
              feiras científicas, olimpíadas, ou eventos. A organização tem o
              objetivo de incentivar os membros a construírem projetos
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
