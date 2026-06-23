import { PageHeader, FounderQuote, FinalCta } from "@/components/sections";

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
        image="/assets/images/ph-meet.jpg"
        imagePosition="center 22%"
      />
      <FounderQuote />
      <FinalCta script="Let's talk, broker to agent" />
    </main>
  );
}
