"use client"

import { CheckCircle, Shield, Clock, Users, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with industry-leading security and compliance standards",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "95% of projects delivered on or before deadline, guaranteed",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Expert engineers assigned exclusively to your project success",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 40% improvement in operational efficiency for clients",
  },
]

const benefits = [
  "12+ years of US market expertise",
  "Agile & Scrum methodologies",
  "24/7 dedicated support",
  "Transparent communication",
  "Competitive pricing models",
  "Post-launch maintenance included",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Innovation Meets Reliability in Enterprise Development
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We transform ideas into market-ready solutions. Our proven process combines cutting-edge technology with strategic thinking to deliver software that drives measurable business results for US enterprises.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20">
              <Image 
                src="/team-collaboration.jpg" 
                alt="Team collaboration" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-primary/30 rounded-xl p-6 shadow-2xl max-w-xs">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Company Stats</p>
              <p className="text-3xl font-bold text-foreground">200+</p>
              <p className="text-sm text-muted-foreground">Enterprise Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/60 hover:bg-card/80 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mt-20 pt-16 border-t border-primary/10">
          <p className="text-center text-muted-foreground mb-10 font-medium">Trusted by leading US enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {["Fortune 500", "Tech Leaders", "StartUps", "Healthcare", "Finance", "Retail"].map((category) => (
              <div key={category} className="px-6 py-3 rounded-lg bg-muted/30 border border-primary/10 hover:border-primary/30 transition-colors">
                <p className="font-semibold text-foreground text-sm">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
