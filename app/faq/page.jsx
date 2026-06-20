import { Wrap, PageHeader, ChatSection, FinalCta } from "@/components/sections";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ: The Questions Agents Actually Ask",
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        eyebrow="FAQ"
        title="The questions agents actually ask."
        intro="Straight answers on splits, fees, support, and making the move. Don't see yours? Ask the broker directly."
        image="/assets/images/ph-faq.jpg"
      />
      <Wrap bg="var(--paper)" py={80}>
        <FaqAccordion />
      </Wrap>
      <ChatSection />
      <FinalCta />
    </main>
  );
}
