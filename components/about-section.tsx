'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target } from 'lucide-react'

export function AboutSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Full-Stack Developer with AI/Data Focus
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    Full-stack engineer with a strong MERN/Next.js foundation and a growing
                    AI/data focus. I work on dataset curation, labeling workflows, evaluation
                    thinking, analytics, metrics, and feedback loops that improve product quality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Interested in model evaluation, data QA, annotation guidelines, prompt
                    evaluation, A/B testing, and data pipelines. I prioritize clear documentation,
                    remote collaboration, and clean engineering practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Current Focus Areas</h3>
              </div>

              <div className="space-y-4">
                {[
                  'Model evaluation and error analysis',
                  'Data QA and annotation guideline design',
                  'Prompt evaluation and consistency checks',
                  'A/B testing and experiment tracking basics',
                  'Scalable data pipelines and product analytics',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}