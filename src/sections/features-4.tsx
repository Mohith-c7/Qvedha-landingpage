'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"

const settings = {
  badge: {
    number: 6,
    text: 'REAL-WORLD IMPACT',
  },
  title: 'Where Q-VEDHA Makes Impact',
  description: 'Designed for real-world medical and research challenges.',
  card_1: {
    title: 'Protein & Sequence Validation',
    content: "Validate drug-protein compatibility using quantum simulations.",
    video: '/protein.mp4'
  },
  card_2: {
    title: 'Rare Disease Research',
    content: 'Explore complex molecular structures that classical systems struggle with.',
  },
  card_3: {
    title: 'Pandemic Drug Acceleration',
    content: 'Rapid hypothesis testing for emerging viral mutations.',
  },
}

export default function Features4() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-foreground/80">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="grid-cols-1 lg:col-span-2 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="space-y-3 md:space-y-5 flex-1">
              <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_1.title}</h3>
              <p className="text-foreground/80">{settings.card_1.content}</p>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl"
              >
                <source src={settings.card_1.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_2.title}</h3>
            <p className="text-foreground/80">{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="left" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_3.title}</h3>
            <p className="text-foreground/80">{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
