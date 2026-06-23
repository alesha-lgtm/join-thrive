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
      <CalculatorSection />
      <PremierAndTools />
      <Pillars />
      <Comparison />
      <ChatSection />
      <FounderQuote />
      <MakingTheMove />
      <IbcSection />
      <FinalCta />
    </main>
  );
}
