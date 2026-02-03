'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import Image from "next/image"
import Card from "@/components/card"

const settings = {
  badge: {
    number: 5,
    text: 'RESEARCH PARTNER',
  },
  title: 'Powered by IonQ',
  subtitle: 'Leading the Quantum Revolution in Drug Discovery',
  description: 'Q-VEDHA is proudly sponsored by IonQ, the pioneer in trapped-ion quantum computing. Together, we\'re accelerating pharmaceutical breakthroughs with the world\'s most powerful quantum systems.',
  partner: {
    name: 'IonQ',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IonQ_corp_logo.svg/1280px-IonQ_corp_logo.svg.png',
    description: 'IonQ delivers industry-leading quantum computing performance through trapped-ion technology, enabling unprecedented computational capabilities for drug discovery and molecular simulation.',
    achievements: [
      {
        metric: '#1',
        label: 'Quantum Computing Leader',
        description: 'Industry-leading trapped-ion technology'
      },
      {
        metric: '99.9%',
        label: 'Gate Fidelity',
        description: 'Highest accuracy in quantum operations'
      },
      {
        metric: '35+',
        label: 'Algorithmic Qubits',
        description: 'Scalable quantum processing power'
      }
    ]
  }
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="relative overflow-hidden py-12 md:py-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,39,255,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,rgba(82,39,255,0.1)_50%,transparent_100%)] animate-shimmer"></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 -z-10"></div>

      <div className="relative z-10 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
        {/* Badge */}
        <SlideEffect>
          <Badge number={settings.badge.number} text={settings.badge.text} />
        </SlideEffect>

        {/* Title */}
        <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 font-medium leading-normal">
          {settings.title}
        </TextRevealEffect>

        {/* Subtitle */}
        <SlideEffect delay={0.1}>
          <p className="text-lg md:text-xl text-primary/80 font-medium px-2 sm:px-10 md:px-0 md:max-w-3/4 mx-auto">
            {settings.subtitle}
          </p>
        </SlideEffect>

        {/* Description */}
        <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-foreground/80">
          {settings.description}
        </SlideEffect>

        {/* Partner Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 px-4 sm:px-6 lg:px-0">
          {/* Left - Logo & Description */}
          <SlideEffect delay={0.3} direction="right">
            <Card className="h-full flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="space-y-4 sm:space-y-6">
                {/* Logo */}
                <div className="inline-block">
                  <Image
                    src={settings.partner.logo}
                    alt={settings.partner.name}
                    width={200}
                    height={80}
                    className="w-24 sm:w-32 md:w-48 h-auto brightness-0 invert opacity-90"
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/80 text-left">
                  {settings.partner.description}
                </p>

                {/* Partnership Badge */}
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] sm:text-xs font-medium text-primary">Official Research Partner</span>
                </div>
              </div>
            </Card>
          </SlideEffect>

          {/* Right - Achievements */}
          <div className="space-y-4 sm:space-y-6">
            {settings.partner.achievements.map((achievement, index) => (
              <SlideEffect key={index} delay={0.4 + index * 0.1} direction="left">
                <Card className="p-4 sm:p-6 text-left hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 flex-shrink-0">
                      {achievement.metric}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-1">
                        {achievement.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </SlideEffect>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 10%) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
