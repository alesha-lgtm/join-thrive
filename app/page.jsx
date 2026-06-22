import {
  Hero,
  ProblemStatement,
  Pillars,
  PremierAndTools,
  Comparison,
  CalculatorSection,
  ChatSection,
  FounderQuote,
  MakingTheMove,
  IbcSection,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <PremierAndTools />
      <Pillars />
      <Comparison />
      <CalculatorSection />
      <ChatSection />
      <FounderQuote />
      <MakingTheMove />
      <IbcSection />
      <FinalCta />
    </main>
  );
}
