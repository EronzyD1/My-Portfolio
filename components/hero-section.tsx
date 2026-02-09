'use client'

import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, ArrowRight, Github, ExternalLink } from 'lucide-react'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
              Nigeria • Remote-Ready • Open to Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
          >
            Eromosele Daniel Otaigbe
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6"
          >
            Full-Stack Developer | AI/Data-Focused
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build scalable web apps and AI-powered experiences — with a focus on data quality,
            evaluation, and product impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group w-full sm:w-auto"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto"
            >
              Contact
            </Button>
          </motion.div>

          {/* Quick stats or highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">AI/Data</div>
              <div className="text-sm text-muted-foreground">Evaluation & QA focus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Full-Stack</div>
              <div className="text-sm text-muted-foreground">Next.js • MERN • APIs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Remote</div>
              <div className="text-sm text-muted-foreground">Nigeria-based, ready</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}