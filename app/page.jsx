import {
  Hero,
  ProblemStatement,
  VideoSection,
  CalculatorSection,
  TeamBand,
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
      <TeamBand />
      <PremierAndTools />
      <Pillars />
      <Culture />
      <IbcSection />
      <VideoSection />
      <FinalCta />
    </main>
  );
}
