'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              EDO
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Social Links & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-6">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                          activeSection === item.href.substring(1)
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}

                    <div className="flex items-center space-x-4 pt-4 border-t">
                      <Button variant="ghost" size="sm" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sticky Contact CTA - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
      >
        <Button
          onClick={() => scrollToSection('#contact')}
          className="shadow-lg hover:shadow-xl transition-shadow"
        >
          <Mail className="h-4 w-4 mr-2" />
          Contact
        </Button>
      </motion.div>

      {/* Mobile Bottom CTA Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border/50"
      >
        <div className="container mx-auto px-4 py-3">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="w-full"
            size="lg"
          >
            <Mail className="h-4 w-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </motion.div>
    </>
  )
}