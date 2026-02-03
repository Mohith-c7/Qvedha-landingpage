export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-2xl text-sm md:text-base h-full bg-muted/50 border border-border/50 p-8 md:p-10 flex flex-col items-start justify-start text-start gap-4 md:gap-5 ${className}`}>
      {children}
    </div>
  )
}
