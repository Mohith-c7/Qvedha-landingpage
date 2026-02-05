'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 1,
    text: 'CORE CAPABILITIES',
  },
  title: 'Built for the Speed of Modern Medicine',
  description: 'Four core capabilities that redefine how drugs are discovered, tested, and validated.',
  card_1: {
    title: 'Quantum Molecular Simulation',
    content: 'Leverage quantum circuits, gates, and energy-state analysis to simulate complex molecular interactions beyond classical limits.',
    carousel_images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1280px-TensorFlow_logo.svg.png',
      'https://quantumzeitgeist.com/wp-content/uploads/qis.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IonQ_corp_logo.svg/1280px-IonQ_corp_logo.svg.png',
      'https://dzh2zima160vx.cloudfront.net/logo/1fa45d060414496543382a8ac05ed9fb_320_160?Expires=1861920000&Signature=HnaXGrJFmyF24gdklXJTt5NjxulRcdYYTu7RyFXn8ZwLmToCAAz7opTVQSLW270~lXesqOUAN8DLIjLCbKDGUCGVHyaSf9Mn13br30z3BsUopKlE9WHOrUjiS6kc4E85808s8~YwRieF6384jgdQKvgz2j0QRDv3vpZ3pGWqgvFoQIOdu~T7DGvgAr0EbzxLZv6uwLUOEcOe24ZZCqFqDsbFgHuaQ7gU9KQQXL0jcro54Xq6ykaKh73A~-ATPTOe9kuBnmRhHwLfp42imi0vnXb8r8COtgTuCiHK8eyWbM35gacCAuTd61dSKheMO30ZONdRlYdHrlLe172BHYzN5A__&Key-Pair-Id=APKAII5OVX4LZ3WT422Q',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1920px-ISO_C%2B%2B_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1280px-Rust_programming_language_black_logo.svg.png',
    ]
  },
  card_2: {
    title: 'AI-Driven Drug Synthesis',
    content: 'Reinforcement learning and quantum algorithms generate and optimize drug candidates with high simulation fidelity.'
  },
  card_3: {
    title: 'Real-Time Quantum Optimization',
    content: '1024 iterative quantum-AI cycles ensure only the most stable, viable drug candidate survives.',
  },
  card_4: {
    title: 'Virtual Human Twin Validation',
    content: 'Survival constant optimization (λ ≥ 0.8). Test drug behavior on a digital twin of human biological pathways before real-world trials.',
    image: '/twin.jpg',
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_1.title}</h3>
            <p className="mb-4 text-foreground/80">{settings.card_1.content}</p>
            <Carousel images={settings.card_1.carousel_images} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_2.title}</h3>
            <p className="text-foreground/80">{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_3.title}</h3>
            <p className="text-foreground/80">{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        {/* card 4 */}
        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-3 md:space-y-5">
              <h3 className="text-xl md:text-title text-primary font-medium">{settings.card_4.title}</h3>
              <p className="text-foreground/80">{settings.card_4.content}</p>
            </div>

            <Image className="w-32 my-auto mx-auto" src={settings.card_4.image} alt={settings.card_4.title} width={512} height={512} />
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
