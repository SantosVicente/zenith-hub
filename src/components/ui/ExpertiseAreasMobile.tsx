import ScrollAnimation from "./framer";

export default function ExpertiseAreasMobile() {
  return (
    <div className="flex flex-col gap-16 pb-48 pt-32 overflow-x-hidden">
      <div className="flex flex-col gap-14">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="text-3xl font-bold max-w-2xl">
            Áreas de atuação da Zenith Hub
          </h1>
        </ScrollAnimation>
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        <ScrollAnimation delay={0.4} duration={0.3} y={150}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">
              🤖 • Inteligência Artificial (IA)
            </h3>

            <p className="text-sm text-zinc-300 text-justify">
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
            <h3 className="text-lg font-bold">
              🚀 • Desenvolvimento Full Stack
            </h3>

            <p className="text-sm text-zinc-300 text-justify">
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
            <h3 className="text-lg font-bold">⭐ • Ciência x Tecnologia</h3>

            <p className="text-sm text-zinc-300 text-justify">
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
