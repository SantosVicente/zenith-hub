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

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <Header />

        <Hero />
      </div>
      <div className="flex flex-col gap-96 pt-20 px-[20rem] border-t border-zinc-100 bg-gradient">
        <div id="about">
          <AboutUs />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="mainObjectives">
          <MainObjectives />
        </div>

        <div id="expertiseAreas">
          <ExpertiseAreas />
        </div>
      </div>

      <div className="m-0 p-0 border border-[#d73cbe] border-dashed" />

      <div className="pt-48 px-[20rem] relative pb-32" id="faqs bg-[#200424]">
        <video
          autoPlay
          loop
          muted
          className="absolute -top-64 left-0 w-full h-full object-cover -z-10 bg-[#200424]"
        >
          <source src="/backgroundFaq.mp4" type="video/mp4" />
        </video>
        <FAQs />
      </div>

      <div className="m-0 p-0 border border-[#d73cbe] border-dashed" />

      <div className="flex flex-col gap-96 pt-20 px-[20rem] bg-gradient border-b border-zinc-100">
        <div id="members">
          <Members />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      <div className="flex flex-col gap-96 pt-20 px-[20rem] bg-[#14101b]">
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
