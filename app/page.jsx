import {
  Hero,
  ProblemStatement,
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
      <FinalCta />
    </main>
  );
}
