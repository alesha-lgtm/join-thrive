import { PageHeader, FounderQuote, TeamPhoto, FinalCta } from "@/components/sections";

export const metadata = {
  title: "Meet the Broker: You'll Always Have Your Broker",
};

export default function MeetTheBrokerPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Meet the Broker"
        title="You'll always have your broker."
        intro="Alesha Oppatt founded Thrive so experienced agents could keep more of what they earn, with real, on-site support on every deal. Here's her note to you."
        sideImage="/assets/images/ph-meet-team.jpg"
        sideImageAlt="Alesha Oppatt, Broker-in-Charge, smiling in an open doorway"
        sideImagePosition="center 42%"
      />
      <FounderQuote />
      <TeamPhoto />
      <FinalCta script="Let's talk, broker to agent" />
    </main>
  );
}
