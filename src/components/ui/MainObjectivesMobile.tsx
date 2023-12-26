import { ClipboardList, Coffee, TrendingUp } from "lucide-react";
import { Inter } from "next/font/google";
import ScrollAnimation from "./framer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
const InterFont = Inter({ subsets: ["latin"] });

export default function MainObjectivesMobile() {
  return (
    <div className="flex flex-col gap-16 w-full items-center pt-16">
      <ScrollAnimation delay={0.1} duration={0.3} y={150}>
        <h1 className="hidden md:block text-5xl font-semibold max-w-5xl w-full text-center">
          Quais são os principais objetivos da Zenith ?
        </h1>
        <h1 className="block md:hidden text-3xl font-semibold max-w-5xl w-full">
          Objetivos da Zenith
        </h1>
      </ScrollAnimation>

      <Accordion type="single" collapsible className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-[#14101b]">
          <ScrollAnimation delay={0.3} duration={0.3} y={150}>
            <AccordionItem value="item-1">
              <div className="relative bg-zinc-200 flex flex-col gap-4 px-8 py-4">
                <AccordionTrigger>
                  <div className="absolute top-7 left-14 w-16 h-16 flex items-center justify-center bg-zinc-950 rounded-full transform -translate-x-1/2">
                    <ClipboardList size={30} className="text-zinc-200" />
                  </div>

                  <h2
                    className={`${InterFont.className} text-right mr-2 uppercase text-xl font-bold`}
                  >
                    Fomentar a Inovação
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-justify">
                    Buscamos constantemente novas maneiras de aplicar a
                    tecnologia para resolver problemas reais e impulsionar a
                    inovação. Nosso objetivo é contribuir para competições e
                    feiras científicas
                  </p>
                </AccordionContent>
              </div>
            </AccordionItem>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} duration={0.3} y={150}>
            <AccordionItem value="item-2">
              <div className="relative bg-zinc-200 flex flex-col gap-4 px-8 py-4">
                <AccordionTrigger>
                  <div className="absolute top-7 left-14 w-16 h-16 flex items-center justify-center bg-zinc-950 rounded-full transform -translate-x-1/2">
                    <TrendingUp size={30} className="text-zinc-200" />
                  </div>
                  <h2
                    className={`${InterFont.className} uppercase text-right mr-2 text-xl font-bold`}
                  >
                    Desenvolver Talentos
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-justify">
                    Nossa missão é ajudar os membros a aprimorar suas
                    habilidades e conhecimentos em tecnologia, preparando-os
                    para um futuro promissor incentivando o trabalho em equipe
                  </p>
                </AccordionContent>
              </div>
            </AccordionItem>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5} duration={0.3} y={150}>
            <AccordionItem value="item-3">
              <div className="relative bg-zinc-200 flex flex-col gap-4 px-8 py-4">
                <AccordionTrigger>
                  <div className="absolute top-7 left-14 w-16 h-16 flex items-center justify-center bg-zinc-950 rounded-full transform -translate-x-1/2">
                    <Coffee size={30} className="text-zinc-200 ml-1" />
                  </div>
                  <h2
                    className={`${InterFont.className} uppercase text-right mr-2 text-xl font-bold`}
                  >
                    Impactar a Comunidade
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-justify">
                    Queremos criar um impacto positivo na sociedade, seja
                    através de feiras científicas, olimpíadas, ou eventos. A
                    organização tem o objetivo de incentivar os membros a
                    construírem projetos
                  </p>
                </AccordionContent>
              </div>
            </AccordionItem>
          </ScrollAnimation>
        </div>
      </Accordion>
    </div>
  );
}
