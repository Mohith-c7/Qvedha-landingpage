import Image from "next/image"

export default function Logo({ className }: { className?: string }) {
  return (
    <Image 
      src="/icon1.png" 
      alt="Q-VEDHA Logo" 
      width={40} 
      height={40} 
      className={className}
    />
  )
}
