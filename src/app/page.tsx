import AboutUs from "@/components/ui/AboutUs";
import Portfolio from "@/components/ui/Portfolio";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        {/*<video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
      >
        <source src="/background.mp4" type="video/mp4" />
  </video>*/}

        <Header />

        <Hero />
      </div>
      <div
        className="flex flex-col gap-96 px-[20rem] border-t border-zinc-100 bg-gradient"
        id="about"
      >
        <AboutUs />

        <Portfolio />
      </div>
    </>
  );
}
