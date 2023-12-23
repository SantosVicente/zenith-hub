import Image from "next/image";
import Setup from "../../assets/images/setup.png";
import ScrollAnimation from "./framer";

export default function ExpertiseAreas() {
  return (
    <div className="flex gap-40 pb-48 pt-32">
      <div className="flex flex-col gap-14">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="text-5xl font-bold max-w-2xl">
            Quais são as áreas de atuação da Zenith Hub?
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} duration={0.3} y={150}>
          <Image
            src={Setup}
            width={0}
            height={0}
            alt="Setup Image"
            className="rounded-sm h-auto w-[40rem] object-contain"
            sizes="100vw"
          />
        </ScrollAnimation>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        <ScrollAnimation delay={0.4} duration={0.3} y={150}>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Inteligência Artificial (IA)</h3>

            <p className="text-lg text-zinc-300">
              Desenvolvemos projetos relacionados à IA, como aprendizado de
              máquina , visão computacional, análises de dados e automação.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.5} duration={0.3} y={150}>
          <div className="h-[2px] bg-zinc-100" />
        </ScrollAnimation>

        <ScrollAnimation delay={0.6} duration={0.3} y={150}>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Desenvolvimento Full Stack</h3>

            <p className="text-lg text-zinc-300">
              Criamos interfaces interativas, utilizando as tecnologias mais
              recentes, e também construímos servidores robustos para essas
              interfaces.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.7} duration={0.3} y={150}>
          <div className="h-[2px] bg-zinc-100" />
        </ScrollAnimation>

        <ScrollAnimation delay={0.8} duration={0.3} y={150}>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Ciência x Tecnologia</h3>

            <p className="text-lg text-zinc-300">
              Nós participamos ativamente de feiras e competições de
              programação, e neles criamos projetos integrando tópicos
              científicos aos nossos produtos.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
