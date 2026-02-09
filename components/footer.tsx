'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:eromosele.dev@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:text-primary transition-colors"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              © {currentYear} Eromosele Daniel Otaigbe. All rights reserved.
            </p>
            <p className="flex items-center justify-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js, TypeScript, and Tailwind CSS</span>
            </p>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>
              Full-Stack Developer • AI/Data Specialist • Nigeria (Remote-Ready)
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}