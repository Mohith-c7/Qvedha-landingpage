'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import FadeEffect from "@/components/fade-effect"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 3,
    text: 'BREAKTHROUGH TECHNOLOGY',
  },
  title: 'The Breakthroughs That Set Q-VEDHA Apart',
  description: 'Not incremental improvements. Fundamental shifts in how drugs are discovered and validated.',
  card_1: {
    title: 'Test drugs on a human without touching a human.',
    content: [
      'Patient state modeled as f(x)',
      'Health-optimized twin modeled as g(x)',
      'Survival constant λ optimized toward ≥ 0.8',
      'Reinforcement learning continuously improves outcomes',
      'Eliminates early-stage trial risk'
    ],
    image: '/vtwin.png'
  },
  card_2: {
    title: 'Designing drugs at the speed of quantum computation.',
    content: [
      'Simulates molecular energy states using VQE',
      'Searches massive solution spaces with Grover\'s algorithm',
      'Filters biological signals via Quantum Fourier Transform',
      'Achieves 87%+ simulation accuracy'
    ],
    image: '/grovers.png'
  },
}

export default function Features2() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-foreground/80">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_1.title}</h3>
            <ul className="mb-4 text-foreground/80 space-y-2 text-left">
              {settings.card_1.content.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Image src={settings.card_1.image} alt={settings.card_1.title} width={512} height={512} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_2.title}</h3>
            <ul className="mb-4 text-foreground/80 space-y-2 text-left">
              {settings.card_2.content.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="relative">
              <Image src={settings.card_2.image} alt={settings.card_2.title} width={512} height={512} />
              <FadeEffect color='muted' />
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
