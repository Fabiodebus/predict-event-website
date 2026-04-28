import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductCore } from "@/components/sections/ProductCore";
import { LifecycleSection } from "@/components/sections/LifecycleSection";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { EventForecast } from "@/components/sections/EventForecast";
import { AccountTiering } from "@/components/sections/AccountTiering";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProblemSection />
        <ProductCore />
        <LifecycleSection />
        <TargetAudience />
        <EventForecast />
        <AccountTiering />
        <FeatureGrid />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
