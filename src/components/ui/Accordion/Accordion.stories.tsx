import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

export default {
  component: Accordion,
};

export const Basic = () => (
  <Accordion type='single' collapsible defaultValue='item-1'>
    <AccordionItem value='item-1'>
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-2'>
      <AccordionTrigger>Item 2</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-3'>
      <AccordionTrigger>Item 3</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value='item-4'>
      <AccordionTrigger>Item 4</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
        WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
