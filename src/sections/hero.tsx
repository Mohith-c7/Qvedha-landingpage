'use client'

import FadeEffect from "@/components/fade-effect";
import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const settings = {
  headline: 'Redefining Drug Discovery',
  headlinePart2: 'with Quantum Computing',
  subheadline: 'Q-VEDHA is the world’s first Quantum drug discovery engine. Accelerating life-saving medicines from years to moments.',
  mainCTA: {
    content: 'try it for free',
    href: '#'
  },
  secondaryCTA: {
    content: 'view live demo',
    href: '#'
  },
  illustration: '/ss.webp',
  reviews: [
    {
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    }
  ]
}

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Background Video - Starts from absolute top (y=0, x=0) */}
      <div className="absolute top-0 left-0 right-0 w-screen h-full -z-10 overflow-hidden ml-[calc((100vw-100%)/2*-1)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
      </div>

      <div className="space-y-8 md:space-y-12 lg:space-y-16 z-50 relative">
        {/* Navbar with transparent background overlay */}
        <div className="relative z-50">
          <Navbar />
        </div>

        <section className="flex flex-col gap-6 lg:gap-8 items-center text-center relative">
        {/* Headline */}
        <h1 className="text-primary text-4xl md:text-6xl lg:text-hero font-medium tracking-tight leading-none max-w-full lg:max-w-[98%] xl:max-w-[1600px] 2xl:max-w-[1800px] text-balance [word-break:keep-all] [overflow-wrap:normal] hyphens-none">
          <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/70'>
            {settings.headline}
          </TextBlurEffect>
          <br />
          <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/70'>
            {settings.headlinePart2}
          </TextBlurEffect>
        </h1>

        {/* Sub-headline */}
        <SlideEffect
          delay={0}
          className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto text-foreground/80"
        >
          {settings.subheadline}
        </SlideEffect>

        {/* AI Chat Input */}
        <SlideEffect delay={0.2} className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-8">
          <div className="relative group" suppressHydrationWarning>
            {/* Refined Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[17px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-[18px] opacity-60"></div>
            
            <div className="relative rounded-2xl border border-border/40 bg-background/98 backdrop-blur-xl shadow-lg overflow-hidden hover:border-border/60 transition-all duration-300">
              
              {/* Top Line - Input */}
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-b border-border/30">
                <input
                  type="text"
                  placeholder="Ask Q-VEDHA anything about drug discovery..."
                  className="flex-1 bg-transparent text-xs sm:text-sm text-foreground placeholder:text-foreground/40 focus:outline-none py-1"
                />
                <button className="p-1.5 sm:p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground/80 hover:text-foreground transition-all flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              {/* Bottom Line - Controls */}
              <div className="flex items-center justify-between px-2 sm:px-3 py-2 sm:py-2.5 bg-background/50">
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* Image Upload */}
                  <button className="p-1.5 sm:p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-all" title="Upload Image">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>

                  {/* Attach File */}
                  <button className="p-1.5 sm:p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-all" title="Attach File">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>

                  {/* Voice Input */}
                  <button className="p-1.5 sm:p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-all" title="Voice Input">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>

                  {/* Divider */}
                  <div className="w-px h-4 sm:h-5 bg-border/50 mx-0.5 sm:mx-1"></div>

                  {/* Model Selection */}
                  <div className="relative" suppressHydrationWarning>
                    <select className="appearance-none bg-transparent border border-border/40 hover:border-primary/50 rounded-lg pl-2 sm:pl-3 pr-6 sm:pr-8 py-1 sm:py-1.5 text-[10px] sm:text-xs text-foreground/80 hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer">
                      <option value="Design">GPT-4</option>
                      <option value="Test">Claude 3.5</option>
                      <option value="Analyze">Gemini Pro</option>
                    </select>
                    <div className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Side - Settings */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <button className="p-1 sm:p-1.5 rounded-lg text-foreground/40 hover:text-foreground hover:bg-muted/50 transition-all">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Helper Text */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 text-[10px] sm:text-xs text-foreground/40 flex-wrap">
            <span className="hidden sm:inline">⌘K to focus</span>
            <span className="hidden sm:inline">•</span>
            <span>Enter to send</span>
            <span>•</span>
            <span>Powered by Quantum AI</span>
          </div>
        </SlideEffect>

        {/* CTA */}
        <SlideEffect
          className="flex flex-col gap-8 md:gap-5 items-center justify-center w-full md:w-fit"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <Link href={settings.mainCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>
            </Link>

            <Link href={settings.secondaryCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex" variant='outline'>
                {settings.secondaryCTA.content}
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden" variant='outline'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>
        </SlideEffect>

        {/* Illustration */}
        <SlideEffect className="relative" isSpring={false} duration={1.3}>
          <Image
            src={settings.illustration}
            alt='illustration'
            width={1920}
            height={1080}
            priority
            loading="eager"
            className="rounded-2xl"
          />
          <FadeEffect />
        </SlideEffect>
      </section>
    </div>
    </div>
  )
}
