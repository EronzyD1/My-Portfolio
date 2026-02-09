'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Brain } from 'lucide-react'

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const experiences = [
    {
      title: 'Full-Stack Development Projects',
      period: 'Projects & Practice',
      type: 'Projects & Practice',
      icon: Code,
      bullets: [
        'Shipped full-stack apps with Next.js, React, Node.js, and modern databases',
        'Built responsive, accessible UIs with Tailwind CSS and Framer Motion',
        'Designed REST APIs and real-time features with clear data contracts',
        'Deployed to Vercel with performance, SEO, and reliability in mind',
      ],
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase'],
      color: 'blue',
    },
    {
      title: 'AI/Data Interest Track',
      period: 'Projects & Practice',
      type: 'Learning & Application',
      icon: Brain,
      bullets: [
        'Built data labeling workflows and QA checks for consistent annotations',
        'Applied evaluation thinking through error analysis and feedback loops',
        'Documented guidelines and metrics for reproducible data quality',
      ],
      skills: ['Data QA', 'Model Evaluation', 'Annotation Guidelines', 'Analytics'],
      color: 'green',
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          text: 'text-blue-500',
          dot: 'bg-blue-500',
        }
      case 'green':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/20',
          text: 'text-green-500',
          dot: 'bg-green-500',
        }
      case 'purple':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          text: 'text-purple-500',
          dot: 'bg-purple-500',
        }
      default:
        return {
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/20',
          text: 'text-gray-500',
          dot: 'bg-gray-500',
        }
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Experience & Growth
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Journey in Full-Stack & AI/Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of projects, learning, and professional development in software engineering
              and AI/data specialization
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((experience, index) => {
              const colors = getColorClasses(experience.color)

              return (
                <motion.div key={experience.title} variants={itemVariants} className="relative mb-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-3 h-3 ${colors.dot} rounded-full border-4 border-background hidden md:block`} />

                  <Card className={`ml-0 md:ml-12 bg-card/50 backdrop-blur-sm border-border/50 ${colors.border}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-3 md:mb-0">
                          <div className={`p-2 ${colors.bg} rounded-lg`}>
                            <experience.icon className={`h-5 w-5 ${colors.text}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{experience.title}</h3>
                            <p className="text-sm text-muted-foreground">{experience.period}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {experience.type}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        {experience.bullets.map((bullet, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`} />
                            <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {experience.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}