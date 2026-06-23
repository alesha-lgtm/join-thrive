import { PageHeader, MakingTheMove, FinalCta } from "@/components/sections";

export const metadata = {
  title: "Making the Move: An Easy, Guided Transition",
};

export default function MakingTheMovePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Making the Move"
        title="Changing brokerages isn't as hard as you think."
        intro="Switching sounds harder than it is. Here's how Thrive makes the transition simple, step by step, with your broker right beside you the whole way."
        image="/assets/images/hero-realestate.jpg"
        imagePosition="right 72%"
        imageOpacity={0.62}
      />
      <MakingTheMove hideHeading />
      <FinalCta script="The move is the easy part" />
    </main>
  );
}
