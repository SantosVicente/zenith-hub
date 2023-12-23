import Image from "next/image";
import Gif from "../../assets/gifs/heart.gif";
import ScrollAnimation from "./framer";

export default function AboutUs() {
  return (
    <div className="flex w-full items-center justify-between gap-44 mt-52">
      <ScrollAnimation delay={0.1} duration={0.3} y={150}>
        <Image src={Gif} alt="logo Zenith HUB" width="450" />
      </ScrollAnimation>

      <div className="flex flex-col gap-6">
        <ScrollAnimation delay={0.3} duration={0.3} y={150}>
          <h1 className="text-5xl font-semibold">Sobre a Organização</h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.4} duration={0.3} y={150}>
          <p className="max-w-lg text-lg text-justify">
            Somos um grupo de apaixonados por tecnologia e inovação, formado por
            estudantes do IFSP Campus Campinas. Nossa paixão nos impulsiona a
            explorar os horizontes da programação. Participamos ativamente de
            feiras científicas e olimpíadas, e estamos constantemente engajados
            na criação de projetos.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}
