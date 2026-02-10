"use client"

import { Code2, Smartphone, Palette, PenTool, ArrowRight, Zap, Target, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance software solutions tailored to complex business needs.",
    features: [
      "Enterprise Applications",
      "Cloud-Based Solutions",
      "API & System Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Application Development",
    description: "Modern web and mobile applications designed for performance, usability, and long-term scalability.",
    features: [
      "Responsive Web Applications",
      "iOS & Android Development",
      "Cross-Platform Solutions",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Engineering",
    description: "User-centric design solutions that improve usability, engagement, and conversion across platforms.",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Prototyping",
      "Design Systems & UI Standards",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Digital Optimization",
    description: "Intelligent automation solutions that streamline workflows and enhance operational efficiency.",
    features: [
      "Business Process Automation",
      "Workflow Optimization",
      "System Orchestration",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced background accents with animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Prominent header section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">Core Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-6 mb-8 leading-tight animate-fade-in-up">
            End-to-End IT <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">Services</span> for Digital Transformation
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From strategy and design to development and optimization, we deliver comprehensive IT services that enable scalable and secure digital transformation for enterprises worldwide.
          </p>

          {/* Key metrics under header */}
          <div className="grid md:grid-cols-3 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-4 rounded-lg bg-card/30 border border-primary/20">
              <p className="text-primary text-2xl font-bold">4+</p>
              <p className="text-muted-foreground text-sm mt-1">Service Domains</p>
            </div>
            <div className="p-4 rounded-lg bg-card/30 border border-primary/20">
              <p className="text-primary text-2xl font-bold">100+</p>
              <p className="text-muted-foreground text-sm mt-1">Projects Delivered</p>
            </div>
            <div className="p-4 rounded-lg bg-card/30 border border-primary/20">
              <p className="text-primary text-2xl font-bold">Global</p>
              <p className="text-muted-foreground text-sm mt-1">Expertise</p>
            </div>
          </div>
        </div>

        {/* Service cards with stagger animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group stagger-item bg-card/40 border border-primary/20 hover:border-primary/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/20 cursor-pointer backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 flex items-center justify-center mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-3 group-hover:text-foreground transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary/50 group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-primary">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom emphasis section */}
        <div className="mt-24 pt-16 border-t border-primary/10 animate-fade-in-up">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Comprehensive Solutions, Expert Execution</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each service is designed to complement others, ensuring seamless integration and maximum value delivery for your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Expert Teams", desc: "Skilled professionals with proven expertise" },
              { title: "Proven Process", desc: "Structured, agile delivery methodology" },
              { title: "Quality Focus", desc: "Enterprise-grade standards & security" },
              { title: "Global Scale", desc: "Experience across multiple regions" },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="stagger-item p-6 rounded-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="font-bold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
