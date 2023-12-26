import AboutUs from "@/components/ui/AboutUs";
import MainObjectives from "@/components/ui/MainObjectives";
import Portfolio from "@/components/ui/Portfolio";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/Hero";
import ExpertiseAreas from "@/components/ui/ExpertiseAreas";
import FAQs from "@/components/ui/FAQs";
import Members from "@/components/ui/Members";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import AboutUsMobile from "@/components/ui/AboutUsMobile";
import MainObjectivesMobile from "@/components/ui/MainObjectivesMobile";
import ExpertiseAreasMobile from "@/components/ui/ExpertiseAreasMobile";
import FAQsMobile from "@/components/ui/FAQsMobile";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
        >
          <source src="/lava.mp4" type="video/mp4" />
        </video> */}

        <Header />

        <Hero />
      </div>
      <div className="flex flex-col overflow-x-hidden gap-48 pt-20 px-8 md:px-[20rem] border-t border-zinc-100 bg-gradient">
        <div id="about">
          <div className="hidden md:block">
            <AboutUs />
          </div>
          <div className="block md:hidden">
            <AboutUsMobile />
          </div>
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="mainObjectives">
          <div className="hidden md:block">
            <MainObjectives />
          </div>
          <div className="block md:hidden">
            <MainObjectivesMobile />
          </div>
        </div>

        <div id="expertiseAreas">
          <div className="hidden md:block">
            <ExpertiseAreas />
          </div>
          <div className="block md:hidden">
            <ExpertiseAreasMobile />
          </div>
        </div>
      </div>

      <div className="m-0 p-0 border border-[#d73cbe] border-dashed" />

      <div
        className="pt-24 md:pt-48 px-8 md:px-[20rem] relative pb-32"
        id="faqs"
      >
        <video
          autoPlay
          loop
          muted
          className="hidden md:block absolute -top-64 left-0 w-full h-full object-cover -z-10 bg-[#200424]"
        >
          <source src="/backgroundFaq.mp4" type="video/mp4" />
        </video>
        <div className="hidden md:block">
          <FAQs />
        </div>

        <div className="block md:hidden">
          <FAQsMobile />
        </div>
      </div>

      <div className="m-0 p-0 border border-[#d73cbe] border-dashed" />

      <div className="flex flex-col gap-48 px-8 md:px-[20rem] bg-gradient border-b border-zinc-100">
        <div id="members">
          <Members />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      <div
        id="footer"
        className="flex flex-col h-full items-center justify-center py-12 px-8 md:px-[20rem] bg-[#14101b]"
      >
        <Footer />
      </div>
    </>
  );
}
