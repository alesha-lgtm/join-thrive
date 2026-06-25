import {
  Hero,
  ProblemStatement,
  VideoSection,
  CalculatorSection,
  Pillars,
  PremierAndTools,
  IbcSection,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <VideoSection />
      <CalculatorSection />
      <PremierAndTools />
      <Pillars />
      <IbcSection />
      <FinalCta />
    </main>
  );
}
