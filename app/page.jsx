import {
  Hero,
  ProblemStatement,
  VideoSection,
  CalculatorSection,
  TeamBand,
  Culture,
  PremierAndTools,
  FinalCta,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <CalculatorSection />
      <TeamBand />
      <Culture />
      <PremierAndTools showWhyLink />
      <VideoSection />
      <FinalCta />
    </main>
  );
}
