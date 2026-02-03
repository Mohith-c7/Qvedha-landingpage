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
      question: 'What is Q-VEDHA?',
      answer: 'Q-VEDHA is the world\'s first Quantum-AI drug discovery engine that combines quantum computing, artificial intelligence, and reinforcement learning to accelerate pharmaceutical research from years to moments.',
    },
    {
      question: 'How does quantum computing help in drug discovery?',
      answer: 'Quantum computing enables us to simulate molecular interactions at the quantum level with unprecedented accuracy. This allows us to analyze billions of molecular combinations, predict drug efficacy with 99.7% accuracy, and reduce development time from 10+ years to months.',
    },
    {
      question: 'What is the Proxima Framework?',
      answer: 'Proxima is our open-source framework that lets you pull any language model from any provider, equip it with quantum and classical tools, and run it on any inference platform. It bridges classical AI and quantum computing with a unified API.',
    },
    {
      question: 'Who sponsors Q-VEDHA?',
      answer: 'Q-VEDHA is proudly sponsored by IonQ, the leader in trapped-ion quantum computing. Together, we\'re pioneering the next generation of pharmaceutical innovation using quantum technology.',
    },
    {
      question: 'How accurate is the Virtual Human Twin validation?',
      answer: 'Our Virtual Human Twin technology models patient states and optimizes survival constants (λ ≥ 0.8) using reinforcement learning. This eliminates early-stage trial risk and continuously improves outcomes through AI-driven optimization.',
    },
    {
      question: 'Can I integrate Q-VEDHA with my existing research?',
      answer: 'Yes! The Proxima framework is designed for seamless integration. You can pull any LLM (GPT, Claude, Gemini, Llama), add quantum and classical tools, and deploy on any inference provider (IonQ, AWS Braket, Azure Quantum).',
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
