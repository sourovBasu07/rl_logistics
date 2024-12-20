import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contactsDetails, faqs } from "@/data";
import SectionTitle from "./SectionTitle";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="flex flex-col gap-3">
        <AccordionTrigger className="bg-[#FFF6F6] border border-[#B3ADAD] rounded p-4 font-medium text-sm lg:text-2xl text-black text-left lg:text-center">
          {question}
        </AccordionTrigger>
        <AccordionContent className="border border-[#B3ADAD] rounded p-4 text-xs lg:text-base text-black">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

import { ElementType } from "react";
import Input from "./shared/Input";
import Button from "./shared/Button";

const ContactCard = ({
  Icon,
  title,
  details,
}: {
  Icon: ElementType;
  title: string;
  details: string[];
}) => {
  return (
    <div className="bg-[#FFF1F2] flex flex-col gap-4 p-6 ease-in-out duration-700 group hover:bg-primary">
      <div className="flex gap-5">
        <div className="min-w-[5.625rem] h-[5.625rem] bg-primary flex justify-center items-center rounded-full duration-500 group-hover:bg-white">
          {<Icon className="fill-white group-hover:fill-primary" />}
        </div>
        <div className="">
          <p className="w-full font-semibold text-[2rem] leading-[2.75rem] text-black duration-500 group-hover:text-white">
            {title}
          </p>
          <div className="">
            {details.map((item, index: number) => (
              <p
                key={index}
                className="text-[1.375rem] text-[#414141] duration-500 group-hover:text-white"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <section className="container flex flex-col items-center gap-12 pt-10 lg:pt-28 pb-28">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-14">
        <div className="flex-1 space-y-10">
          <div className={`w-full lg:w-[550px] flex flex-col gap-3 lg:gap-6`}>
            <div className={`flex flex-col gap-0 lg:gap-4`}>
              <div className="flex items-center gap-3">
                <h4 className="text-primary uppercase">Get a Quote</h4>
                <div className="flex items-center gap-[2px]">
                  <div className="w-8 h-[2px] bg-primary rounded-[2px]" />
                  <div className="w-1 h-[2px] bg-primary rounded-[2px]" />
                </div>
              </div>
              <p className="font-semibold text-[2rem] leading-[2.75rem] text-black">
                Get in touch and we’ll help your business
              </p>
            </div>
            <p className="">
              Transmax is the world’s driving worldwide coordinations supplier
              we uphold industry and exchange the worldwide trade of about dummy
              merchandise through land transport.
            </p>
          </div>
          <div className="space-y-4">
            {contactsDetails.map((item, index: number) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex-[1.35] flex flex-col items-start gap-10">
          <div className={`w-full lg:w-[550px] flex flex-col gap-3 lg:gap-6`}>
            <div
              className={`flex flex-col items-center lg:items-start gap-0 lg:gap-4`}
            >
              <div className="flex items-center gap-3">
                <h4 className="text-primary uppercase">Contact for Services</h4>
                <div className="flex items-center gap-[2px]">
                  <div className="w-8 h-[2px] bg-primary rounded-[2px]" />
                  <div className="w-1 h-[2px] bg-primary rounded-[2px]" />
                </div>
              </div>
              <p className="font-semibold text-[2rem] leading-[2.75rem] text-black text-center lg:text-left">
                Feel free to write our logistics services experts
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 gap-10">
            <Input style="booknow" label="Name" required labelWidth="80px" />
            <Input style="booknow" label="Email" required labelWidth="80px" />
            <Input style="booknow" label="Phone" required labelWidth="80px" />
            <Input style="booknow" label="Subject" required labelWidth="80px" />
          </div>
          <Input
            style="booknow"
            type="textarea"
            label="Message"
            required
            labelWidth="80px"
          />
          <Button text="Send Message" className="mt-8" />
        </div>
      </div>
      <SectionTitle
        name="FAQ"
        title="Frequently Asked Questions"
        center
        className="w-[900px] max-w-full"
      />

      <div className="w-[965px] max-w-full flex flex-col gap-3 mx-auto">
        {faqs.map((faq, index: number) => (
          <Faq key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};
export default ContactUs;
