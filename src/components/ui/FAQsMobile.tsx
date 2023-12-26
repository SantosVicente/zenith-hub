import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export default function FAQsMobile() {
  return (
    <div className="flex flex-col gap-12 w-full items-center">
      <h1 className="text-3xl font-semibold max-w-5xl w-full text-center">
        {"FAQ's"}
      </h1>

      <Accordion type="single" collapsible className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#14101b]">
          <AccordionItem value="item-1">
            <div className="bg-zinc-200 flex flex-col gap-4">
              <AccordionTrigger className="bg-[#d73cbe] text-zinc-100 px-4">
                <div className="p-4 w-full">
                  <p className="text-base text-left">
                    Como posso tirar dúvidas ou contribuir com a Zenith ?
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="p-8">
                  Você pode dar uma olhada em nosso site e redes sociais para
                  saber mais sobre nossos projetos e atividades. E caso queira,
                  fique à vontade para entrar em contato e conversar conosco.
                  Estamos aqui para responder às suas perguntas e ajudá-lo a se
                  envolver conosco!
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2">
            <div className="bg-zinc-200 flex flex-col gap-4">
              <AccordionTrigger className="bg-[#d73cbe] text-zinc-100 px-4">
                <div className="p-4 w-full">
                  <p className="text-base text-left">
                    Quais são os principais objetivos da Zenith ?
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-8 flex flex-col gap-4">
                  <p>Nossos objetivos incluem:</p>
                  <ul className="ml-4 list-disc">
                    <li>Fomentar a inovação</li>
                    <li>Desenvolver talentos</li>
                    <li>Impactar a comunidade</li>
                    <li>Colaborar e aprender</li>
                  </ul>
                  <p>Nossos objetivos refletem a idealização do projeto.</p>
                </div>
                <div className="flex flex-1 items-end">
                  <span className="text-purple-700 font-extrabold underline pb-8 px-8">
                    <Link href="#mainObjectives">
                      Clique aqui para saber mais
                    </Link>
                  </span>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3">
            <div className="bg-zinc-200 flex flex-col gap-4">
              <AccordionTrigger className="bg-[#d73cbe] text-zinc-100 px-4">
                <div className="p-4 w-full">
                  <p className="text-base text-left">
                    Quais são as áreas de atuação da Zenith Hub ?
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-8 flex flex-col gap-4">
                  <p>
                    A Zenith Hub abrange uma ampla variedade de áreas de
                    atuação, incluindo:
                  </p>
                  <ul className="ml-4 list-disc">
                    <li>Inteligência Artificial (IA)</li>
                    <li>Desenvolvimento Web e Mobile</li>
                    <li>Educação Tecnológica</li>
                    <li>Integrar Ciência e Tecnologia</li>
                  </ul>
                </div>
                <div className="flex flex-1 items-end">
                  <span className="text-purple-700 font-extrabold underline pb-8 px-8">
                    <Link href="#expertiseAreas">
                      Clique aqui para saber mais
                    </Link>
                  </span>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}
