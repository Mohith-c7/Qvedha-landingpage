'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 4,
    text: 'AI MODELS',
  },
  title: 'Dive Into the Details',
  description: 'See beyond clicks with the power of events, A/B testing, and tag-based segmentation, drill down into single sessions, or track your performance with flexible conversion goals.',
  card_1: {
    title: 'ALPHA X8 664M',
    content: 'Large Reasoning Model (LRM) for autonomous de-novo molecular generation.',
    image: '/664M.jpeg'
  },
  card_2: {
    title: 'ALPHA X8 8B',
    content: 'Large Reasoning Model (LRM) for Thinking or Reasoning.',
    image: '/8B.png'
  },
}

export default function Features3() {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card className="p-8">
            <h3 className="text-2xl md:text-3xl text-primary font-medium mb-4">{settings.card_1.title}</h3>
            <p className="mb-6 text-base text-foreground/80">{settings.card_1.content}</p>
            <Image src={settings.card_1.image} alt={settings.card_1.title} width={512} height={512} className="w-full" />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" className="col-span-1 h-full" isSpring={false}>
          <Card className="p-8">
            <h3 className="text-2xl md:text-3xl text-primary font-medium mb-4">{settings.card_2.title}</h3>
            <p className="mb-6 text-base text-foreground/80">{settings.card_2.content}</p>
            <Image src={settings.card_2.image} alt={settings.card_2.title} width={512} height={512} className="w-full" />
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
