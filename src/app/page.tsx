import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../assets/images/logo_sem_fundo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <header className="flex w-full h-12 items-center justify-between px-16 my-2">
        <Image src={Logo} alt="logo Zenith HUB" width="300" />

        <Button>Sign in</Button>
      </header>
    </main>
  );
}
