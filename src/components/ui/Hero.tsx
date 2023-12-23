import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Orbitron } from "next/font/google";
const OrbitronFont = Orbitron({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="flex flex-col flex-1 gap-4 w-full items-center justify-center">
      <h1
        className={`font-bold text-4xl text-center md:text-5xl ${OrbitronFont.className}`}
      >
        CONSTRUA O FUTURO
      </h1>
      <h2 className="font-bold text-xl text-center mx-8 md:text-3xl">
        Faça parte da revolução da codificação!
      </h2>

      {/*beacons*/}
      <Link href="/">
        <Button className="ml-4 bg-gradient-to-r from-purple-600 to-pink-500 transform hover:scale-110 transition-all">
          Saiba Mais
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
