import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian = () => {
  return (
    <>
    <div className="">
      <Accordion type="single" collapsible className="w-full flex gap-2 flex-col ">
        <AccordionItem value="item-1" className=" rounded-md px-4 bg-gray-800/50 backdrop-blur-lg  text-white">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="rounded-md px-4 bg-gray-800/50 backdrop-blur-lg  text-white">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="rounded-md px-4 bg-gray-800/50 backdrop-blur-lg  text-white">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </>
  );
};

export default Accordian;
