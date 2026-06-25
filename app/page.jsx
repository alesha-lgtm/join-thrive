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
      <CalculatorSection />
      <PremierAndTools />
      <Pillars />
      <IbcSection />
      <VideoSection />
      <FinalCta />
    </main>
  );
}
