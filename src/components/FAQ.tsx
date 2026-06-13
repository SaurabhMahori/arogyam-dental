import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accept new patients?",
    answer: "Yes! We are always happy to welcome new patients to our dental family. You can book your first consultation online or by calling our clinic."
  },
  {
    question: "I have extreme dental anxiety. How can you help?",
    answer: "We specialize in treating anxious patients. Our clinic is designed to be calming, we never rush appointments, and Dr. Akanksha uses a highly gentle approach. Let us know about your anxiety when booking, and we'll take extra care."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit is a relaxed consultation. We'll discuss your dental history, take necessary X-rays, perform a gentle examination, and discuss any treatment plans if needed. No pressure, just conversation."
  },
  {
    question: "Do you treat children?",
    answer: "Absolutely. We love helping children build positive associations with dental care from an early age. We recommend bringing them in around their first birthday."
  },
  {
    question: "What if I have a dental emergency?",
    answer: "Please call us immediately at 08368504849. We prioritize dental emergencies and will do our best to see you the same day to relieve pain and address the issue."
  },
  {
    question: "How often should I get a dental checkup?",
    answer: "For most people, we recommend a routine checkup and cleaning every 6 months. However, depending on your oral health, we might suggest a different schedule tailored to you."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before your first visit.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
