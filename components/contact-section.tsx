'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, Twitter } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danieleromoseleotaigbe@gmail.com',
      href: 'mailto:eromosele.dev@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria (Remote)',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/EronzyD1/',
      username: '@github-handle',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com',
      username: '@your-handle',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.label} className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-4">
                        <a
                          href={info.href}
                          className="flex items-center space-x-3 hover:text-primary transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <info.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <Card key={social.label} className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-4">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 hover:text-primary transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <social.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{social.label}</p>
                            <p className="text-sm text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        I typically respond to messages within 24 hours. For urgent inquiries,
                        feel free to follow up.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}