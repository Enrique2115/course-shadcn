import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    title: "Is it accessible?",
    content:
      "Yes. It adheres to the WAI-ARIA design pattern. It&apos;s easy to navigate with keyboard.",
  },
  {
    id: "item-2",
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    id: "item-3",
    title: "Is it animated?",
    content:
      "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
