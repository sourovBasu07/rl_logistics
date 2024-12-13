import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import SectionTitle from "./SectionTitle";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="flex flex-col gap-3">
        <AccordionTrigger className="bg-[#FFF6F6] border border-[#B3ADAD] rounded p-4 font-medium text-2xl text-black">
          {question}
        </AccordionTrigger>
        <AccordionContent className="border border-[#B3ADAD] rounded p-4 text-base text-black">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ContactUs = () => {
  return (
    <section className="container flex flex-col items-center gap-20">
      <SectionTitle
        name="FAQ"
        title="Frequently Asked Questions"
        center
        className="w-[900px] max-w-full"
      />
      <div className="w-full flex flex-col gap-3">
        {faqs.map((faq, index: number) => (
          <Faq key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};
export default ContactUs;
