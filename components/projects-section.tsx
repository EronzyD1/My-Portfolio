'use client'

import { motion, type Variants } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, MapPin, MessageCircle, Cpu, Briefcase } from 'lucide-react'

export function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  const projects = [
    {
      title: 'LandGuard',
      subtitle: 'AI-Powered Land Degradation Risk Explorer',
      description: 'Geospatial visualization and risk exploration for land degradation insights.',
      problem: 'Make complex land-risk signals understandable for decision-makers.',
      impact: 'Geospatial visualization + risk insights; built for clarity in decision-making.',
      tech: ['Next.js', 'TypeScript', 'Mapbox', 'Tailwind CSS'],
      github: '#',
      demo: 'https://land-guard-app.vercel.app/',
      icon: MapPin,
      featured: true,
    },
    {
      title: 'ZapChat',
      subtitle: 'Real-Time Chat Room Application',
      description: 'Real-time chat rooms with dependable event delivery and presence.',
      problem: 'Keep users connected with low-latency, reliable messaging.',
      impact: 'Real-time event flows; focus on reliability and system behavior.',
      tech: ['React', 'Node.js', 'Express.js', 'Socket.io'],
      github: '#',
      demo: 'https://zapchat-rose.vercel.app/',
      icon: MessageCircle,
      featured: true,
    },
    {
      title: 'SpecTrek',
      subtitle: 'PC-Game Compatibility Analyzer',
      description: 'An advanced desktop utility that analyzes hardware specifications and cross-references them with game requirements to determine PC compatibility.',
      problem: 'Help users determine PC compatibility with games before purchasing or installing.',
      impact: 'Real-time hardware detection and heuristic performance ranking.',
      tech: ['Electron', 'React', 'Node.js', 'Tailwind CSS', 'SystemInformation Library'],
      github: '#',
      demo: '#',
      icon: Cpu,
      featured: true,
    },
    {
      title: 'JobHub Youth',
      subtitle: 'Gig & Opportunity Matching Platform',
      description: 'Gig and opportunity matching with structured listings.',
      problem: 'Help users discover relevant opportunities faster.',
      impact: 'Opportunity matching concepts; focus on user intent and scalable backend.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: '#',
      demo: 'https://jobhubyouth.vercel.app/',
      icon: Briefcase,
      featured: true,
    },
  ]

  const highlights = [
    {
      title: 'Data Quality Mindset',
      description: 'Edge-case handling, consistent labeling rules, and scalable data pipelines.',
    },
    {
      title: 'Evaluation Thinking',
      description: 'Error analysis, feedback loops, and precision vs recall tradeoffs in model performance.',
    },
    {
      title: 'Documentation Excellence',
      description: 'Writing clear guidelines, specs, and testable requirements for team alignment.',
    },
    {
      title: 'User-Centric Product Development',
      description: 'Building features that solve real problems with measurable impact.',
    },
    {
      title: 'Collaborative Engineering',
      description: 'Remote collaboration, code reviews, and cross-functional teamwork.',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building Impact Through Code
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-powered geospatial tools to real-time communication platforms,
              each project demonstrates technical excellence and user-focused design
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-primary">Problem Solved</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-primary">Impact & Learning</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* AI/Data Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">
                AI/Data Highlights
              </Badge>
              <h3 className="text-2xl font-semibold mb-4">
                Data-Driven Development Approach
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key principles and methodologies that guide my work in AI and data-focused projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-sm mb-2">{highlight.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}