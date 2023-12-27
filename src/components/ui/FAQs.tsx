import Link from "next/link";

export default function FAQs() {
  return (
    <div className="flex flex-col gap-24 w-full items-center">
      <h1 className="text-4xl 2xl:text-5xl font-semibold max-w-5xl w-full text-center">
        {"FAQ's"}
      </h1>

      <div className="grid grid-cols-3 gap-24 text-[#14101b]">
        <div className="bg-zinc-200 flex flex-col gap-4">
          <div className="bg-[#d73cbe] text-zinc-100 p-8 w-full h-36">
            <p className="text-base 2xl:text-lg">
              Como posso tirar dúvidas, propor uma ideia ou contribuir com a
              Zenith ?
            </p>
          </div>
          <p className="p-8 text-sm 2xl:text-base">
            Você pode dar uma olhada em nosso site e redes sociais para saber
            mais sobre nossos projetos e atividades. E caso queira, fique à
            vontade para entrar em contato e conversar conosco. Estamos aqui
            para responder às suas perguntas e ajudá-lo a se envolver conosco!
          </p>
        </div>

        <div className="bg-zinc-200 flex flex-col gap-4">
          <div className="bg-[#d73cbe] text-zinc-100 p-8 w-full h-36">
            <p className="text-base 2xl:text-lg">
              Quais são os principais objetivos da Zenith ?
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 text-sm 2xl:text-base">
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
            <span className="text-purple-700 font-extrabold underline pb-8 px-8 text-sm">
              <Link href="#mainObjectives">Clique aqui para saber mais</Link>
            </span>
          </div>
        </div>

        <div className="bg-zinc-200 flex flex-col gap-4">
          <div className="bg-[#d73cbe] text-zinc-100 p-8 w-full h-36">
            <p className="text-base 2xl:text-lg">
              Quais são as áreas de atuação da Zenith Hub ?
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 text-sm 2xl:text-base">
            <p>
              A Zenith Hub abrange uma ampla variedade de áreas de atuação,
              incluindo:
            </p>
            <ul className="ml-4 list-disc">
              <li>Inteligência Artificial (IA)</li>
              <li>Desenvolvimento Web e Mobile</li>
              <li>Educação Tecnológica</li>
              <li>Integrar Ciência e Tecnologia</li>
            </ul>
          </div>
          <div className="flex flex-1 items-end">
            <span className="text-purple-700 font-extrabold underline pb-8 px-8 text-sm">
              <Link href="#expertiseAreas">Clique aqui para saber mais</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
