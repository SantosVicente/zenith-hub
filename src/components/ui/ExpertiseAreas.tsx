import Image from "next/image";
import Setup from "../../assets/images/setup.png";

export default function ExpertiseAreas() {
  return (
    <div className="flex gap-40 pb-48">
      <div className="flex flex-col gap-14">
        <h1 className="text-5xl font-bold max-w-2xl">
          Quais são as áreas de atuação da Zenith Hub?
        </h1>

        <Image
          src={Setup}
          width={0}
          height={0}
          alt="Setup Image"
          className="rounded-sm h-auto w-[40rem] object-contain"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col gap-8 max-w-md">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Inteligência Artificial (IA)</h3>

          <p className="text-lg text-zinc-300">
            Desenvolvemos projetos relacionados à IA, como aprendizado de
            máquina , visão computacional, análises de dados e automação.
          </p>
        </div>

        <div className="h-[2px] bg-zinc-100" />

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Desenvolvimento Full Stack</h3>

          <p className="text-lg text-zinc-300">
            Criamos interfaces interativas, utilizando as tecnologias mais
            recentes, e também construímos servidores robustos para essas
            interfaces.
          </p>
        </div>

        <div className="h-[2px] bg-zinc-100" />

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Ciência x Tecnologia</h3>

          <p className="text-lg text-zinc-300">
            Nós participamos ativamente de feiras e competições de programação,
            e neles criamos projetos integrando tópicos científicos aos nossos
            produtos.
          </p>
        </div>
      </div>
    </div>
  );
}
