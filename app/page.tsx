import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { Platforms, Pains, Services, Season, HowItWorks, Plans, FAQ, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-chalk">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Platforms />
        <Pains />
        <Services />
        <Season />
        <HowItWorks />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
