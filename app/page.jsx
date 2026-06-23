import {
  Hero,
  ProblemStatement,
  CalculatorSection,
  Pillars,
  IbcSection,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <CalculatorSection />
      <Pillars />
      <IbcSection />
      <FinalCta />
    </main>
  );
}
