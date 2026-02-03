'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'Why is the sky blue?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
    },
    {
      question: 'Why did the chicken cross the road?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
    },
    {
      question: 'How many licks does it take to get to the center of a tootsie pop?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
    },
    {
      question: "Where's Waldo?",
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-foreground">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
