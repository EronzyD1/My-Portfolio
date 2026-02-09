'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Brain, Wrench, Monitor, Server, Cpu, BarChart3 } from 'lucide-react'

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      description: 'Modern UI engineering with performance and polish',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: Server,
      description: 'APIs, services, and data persistence',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'],
    },
    {
      title: 'AI/Data',
      icon: Brain,
      description: 'Evaluation, labeling, and analytics mindset',
      skills: [
        'Data labeling & QA workflows',
        'Annotation guidelines & taxonomy design',
        'Model evaluation (precision/recall, error analysis)',
        'Experiment tracking basics',
        'Basic NLP sentiment analysis integration',
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      description: 'Shipping and collaboration essentials',
      skills: ['Git/GitHub', 'Postman', 'Vercel', 'CI basics'],
    },
  ]

  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Expertise Across the Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set combining full-stack development with AI/data specialization
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Additional Capabilities</h3>
              <p className="text-muted-foreground">
                Beyond technical skills, bringing valuable perspectives to AI/data teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Analytics & Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Setting up dashboards, defining KPIs, and analyzing user behavior patterns
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Cpu className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Experiment Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    A/B testing frameworks, hypothesis validation, and iterative improvement
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Clean Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintainable code, scalable systems, and engineering best practices
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}