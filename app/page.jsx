import {
  Hero,
  ProblemStatement,
  VideoSection,
  CalculatorSection,
  Pillars,
  Culture,
  PremierAndTools,
  IbcSection,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <CalculatorSection />
      <PremierAndTools />
      <Pillars />
      <Culture />
      <IbcSection />
      <VideoSection />
      <FinalCta />
    </main>
  );
}
