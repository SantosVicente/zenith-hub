import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "../../assets/images/instagram_icon.png";
import GithubIcon from "../../assets/images/github_icon.png";

import DonutGif from "../../assets/gifs/donuts.gif";
import { Orbitron } from "next/font/google";
const OrbitronText = Orbitron({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="flex gap-20 justify-between items-center pb-40 pt-14 md:pt-28">
      <div className="flex flex-col gap-14 md:gap-20">
        <h1 className="text-4xl 2xl:text-5xl font-bold max-w-2xl">
          Entre em contato conosco
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className={`${OrbitronText.className} text-2xl font-semibold`}>
            Phone
          </h2>
          <p className="text-xl text-[#de4ec6]">(19) 99456-7890</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OrbitronText.className} text-2xl font-semibold`}>
            Email
          </h2>
          <p className="text-xl text-[#de4ec6]">ZenithH@gmail.com</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OrbitronText.className} text-2xl font-semibold`}>
            Social
          </h2>
          <div className="flex px-8 py-3 max-w-xs border border-zinc-200 justify-between items-center">
            <Link href="">
              <Image
                src={InstagramIcon}
                alt="instagram"
                width="50"
                height="50"
              />
            </Link>
            <Link href="">
              <Image src={GithubIcon} alt="github" width="50" height="50" />
            </Link>
            <Link href="">
              <Image
                src={InstagramIcon}
                alt="instagram"
                width="50"
                height="50"
              />
            </Link>
            <Link href="">
              <Image src={GithubIcon} alt="github" width="50" height="50" />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={DonutGif}
        alt="image2"
        width={0}
        height={0}
        sizes="100vw"
        className="hidden md:block object-contain w-[30rem] h-[30rem] rounded-2xl"
      />
    </div>
  );
}
