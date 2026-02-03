export default function Badge({ number, text }: { number: number, text: string }) {
  return (
    <div className="flex items-center h-8 text-foreground text-[12px] md:text-[16px] bg-muted/50 border border-border/50 w-fit rounded-full mx-auto">
      <div className="h-8 w-8 flex items-center justify-center bg-accent/20 rounded-full font-medium text-[16px] md:text-[18px] text-accent">{number}</div>
      <div className="uppercase tracking-wider py-2 px-4 w-fit text-foreground/80">{text}</div>
    </div>
  )
}
