'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import Antigravity from "@/components/antigravity"
import { useState } from "react"

const settings = {
  badge: {
    number: 2,
    text: 'FRAMEWORK',
  },
  title: 'Introducing Proxima',
  subtitle: 'Pull Any LLM. Add Quantum & Classical Tools. Deploy Anywhere.',
  description: 'Proxima lets you pull any language model from any provider, equip it with quantum and classical tools, and run it on any inference platform—all with a unified API.',
  codeSnippet: `import proxima as pxi

pxi.api.load("---your--api--here---")

agent = pxi.model.fetch(model_provider = Google)

@qtool
def bell_state_circuit():
    qml.Hadamard(wires=0)
    qml.CNOT(wires=[0, 1])
    return qml.probs(wires=[0, 1])

device = pxi.device(device = "device")

device.run(
    agent(
        prompt="Hello Can you perform me the circuit analysis",
        noise = false,
        token_limit = 100
    )
)`,
  features: [
    {
      icon: '🔌',
      title: 'Pull Any LLM',
      description: 'Works with GPT, Claude, Gemini, Llama, or any custom model from any provider'
    },
    {
      icon: '🛠️',
      title: 'Quantum + Classical Tools',
      description: 'Assign both quantum algorithms and traditional tools to the same model'
    },
    {
      icon: '☁️',
      title: 'Any Inference Provider',
      description: 'Deploy on IonQ, AWS Braket, Azure Quantum, or your own infrastructure'
    }
  ]
}

export default function ProximaFramework() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(settings.codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center py-12 md:py-16 overflow-hidden">
      {/* Antigravity Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 -z-10"></div>

      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/70 font-medium leading-normal">
          {settings.title}
        </h2>
      </SlideEffect>

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

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 px-4 sm:px-6 lg:px-0">
        {/* Left Column - Code Snippet */}
        <SlideEffect delay={0.3} direction="right" className="order-2 lg:order-1">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Window Container */}
            <div className="relative bg-[#1e1e2e] rounded-xl overflow-hidden border border-border/30 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#181825] border-b border-border/20">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ed8796]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#eed49f]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#a6da95]"></div>
                  </div>
                  <span className="ml-2 text-xs text-foreground/60 font-mono hidden sm:inline">proxima_demo.py</span>
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all text-xs font-medium text-primary"
                >
                  {copied ? (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content - Compact */}
              <div className="p-3 sm:p-4 overflow-x-auto max-h-[400px] sm:max-h-[500px] overflow-y-auto text-left">
                <pre className="text-[10px] sm:text-xs font-mono leading-relaxed">
                  <code className="text-foreground/90">
                    <span className="text-[#f5c2e7]">import</span> <span className="text-[#89dceb]">proxima</span> <span className="text-[#f5c2e7]">as</span> <span className="text-[#89dceb]">pxi</span>
                    {'\n\n'}
                    <span className="text-[#cba6f7]">pxi</span>.<span className="text-[#89dceb]">api</span>.<span className="text-[#89dceb]">load</span>(<span className="text-[#a6e3a1]">&quot;---your--api--here---&quot;</span>)
                    {'\n\n'}
                    <span className="text-[#cba6f7]">agent</span> = <span className="text-[#cba6f7]">pxi</span>.<span className="text-[#89dceb]">model</span>.<span className="text-[#89dceb]">fetch</span>(<span className="text-[#f38ba8]">model_provider</span> = <span className="text-[#fab387]">Google</span>)
                    {'\n\n'}
                    <span className="text-[#f9e2af]">@qtool</span>
                    {'\n'}
                    <span className="text-[#f5c2e7]">def</span> <span className="text-[#89dceb]">bell_state_circuit</span>():
                    {'\n'}
                    {'    '}<span className="text-[#cba6f7]">qml</span>.<span className="text-[#89dceb]">Hadamard</span>(<span className="text-[#f38ba8]">wires</span>=<span className="text-[#fab387]">0</span>)
                    {'\n'}
                    {'    '}<span className="text-[#cba6f7]">qml</span>.<span className="text-[#89dceb]">CNOT</span>(<span className="text-[#f38ba8]">wires</span>=[<span className="text-[#fab387]">0</span>, <span className="text-[#fab387]">1</span>])
                    {'\n'}
                    {'    '}<span className="text-[#f5c2e7]">return</span> <span className="text-[#cba6f7]">qml</span>.<span className="text-[#89dceb]">probs</span>(<span className="text-[#f38ba8]">wires</span>=[<span className="text-[#fab387]">0</span>, <span className="text-[#fab387]">1</span>])
                    {'\n\n'}
                    <span className="text-[#cba6f7]">device</span> = <span className="text-[#cba6f7]">pxi</span>.<span className="text-[#89dceb]">device</span>(<span className="text-[#f38ba8]">device</span> = <span className="text-[#a6e3a1]">&quot;device&quot;</span>)
                    {'\n\n'}
                    <span className="text-[#cba6f7]">device</span>.<span className="text-[#89dceb]">run</span>(
                    {'\n'}
                    {'    '}<span className="text-[#cba6f7]">agent</span>(
                    {'\n'}
                    {'        '}<span className="text-[#f38ba8]">prompt</span>=<span className="text-[#a6e3a1]">&quot;Hello Can you perform me the circuit analysis&quot;</span>,
                    {'\n'}
                    {'        '}<span className="text-[#f38ba8]">noise</span> = <span className="text-[#fab387]">false</span>,
                    {'\n'}
                    {'        '}<span className="text-[#f38ba8]">token_limit</span> = <span className="text-[#fab387]">100</span>
                    {'\n'}
                    {'    '})
                    {'\n'}
                    )
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </SlideEffect>

        {/* Right Column - Content & Features */}
        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-left">
          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {settings.features.map((feature, index) => (
              <SlideEffect key={index} delay={0.4 + index * 0.1} direction="left">
                <div className="relative group/card">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover/card:opacity-100 transition duration-300"></div>
                  <div className="relative bg-background/60 backdrop-blur-sm border border-border/40 rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-1 sm:mb-2">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-foreground/70">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideEffect>
            ))}
          </div>

          {/* CTA Badge */}
          <SlideEffect delay={0.7}>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-primary">pip install proxima</span>
            </div>
          </SlideEffect>
        </div>
      </div>
    </div>
  )
}
