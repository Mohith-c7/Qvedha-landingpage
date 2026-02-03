'use client'

import { Facebook, Github, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const settings = {
  links: [
    { title: 'About', href: '/' },
    { title: 'Blog', href: '/' },
    { title: 'Jobs', href: '/' },
    { title: 'Press', href: '/' },
    { title: 'Affiliate', href: '/' },
    { title: 'Contact Us', href: '/' },
  ],
  socialMedia: [
    { title: 'Facebook', icon: Facebook, href: '/' },
    { title: 'Instagram', icon: Instagram, href: '/' },
    { title: 'Github', icon: Github, href: '/' },
    { title: 'Youtube', icon: Youtube, href: '/' },
  ],
  copyright: '© 2024 Your Company, Inc. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10 text-foreground/70 hover:text-foreground transition-colors">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href} className="hover:text-primary transition-colors">{link.title}</Link>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10 text-foreground/70 hover:text-foreground">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href} className="hover:text-accent transition-colors"><social.icon size={20} /></Link>
        ))}
      </div>

      {/* copyright */}
      <p className="text-center text-foreground/60">{settings.copyright}</p>
    </footer>
  )
}
