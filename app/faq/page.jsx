import { Wrap, PageHeader, ChatSection, FinalCta } from "@/components/sections";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/components/faqData";

export const metadata = {
  title: "FAQ: The Questions Agents Actually Ask",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
      <FinalCta script="No question off the table" />
    </main>
  );
}
