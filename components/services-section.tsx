"use client"

import { Code2, Smartphone, Palette, PenTool, ArrowRight, Zap, Target, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Enterprise-grade custom software built with latest technologies",
    features: ["Enterprise Applications", "Cloud Solutions", "API Development"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Responsive applications delivering exceptional user experiences",
    features: ["iOS & Android", "Progressive Web Apps", "Cross-Platform"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts and delights customers",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: PenTool,
    title: "Brand & Graphics",
    description: "Visual identities and marketing materials that stand out",
    features: ["Brand Identity", "Marketing Collateral", "Illustrations"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Complete Solutions for Your Digital Transformation
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to launch, we provide end-to-end technology solutions tailored for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card/50 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-lg group">
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
