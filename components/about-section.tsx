"use client"

import { CheckCircle, Shield, Clock, Users, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Secure development practices aligned with modern compliance and data protection standards",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Structured project planning and execution to ensure predictable timelines",
  },
  {
    icon: Users,
    title: "Dedicated Delivery Teams",
    description: "Skilled engineers, designers, and managers focused on your project goals",
  },
  {
    icon: TrendingUp,
    title: "Business-Driven Results",
    description: "Technology solutions designed to improve efficiency, scalability, and performance",
  },
]

const benefits = [
  "Global delivery experience across US, Europe & Middle East",
  "Agile & Scrum-based development approach",
  "Dedicated project and engineering teams",
  "Clear and transparent communication",
  "Flexible and scalable engagement models",
  "Ongoing support and maintenance services",
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left content */}
          <div className="animate-fade-in-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Trusted IT Partner for Scalable Digital Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We help enterprises and growing businesses design, build, and scale reliable digital solutions. By combining modern technologies, user-focused design, and structured delivery processes, we deliver software solutions that support long-term business growth across global markets.
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
          <div className="relative animate-fade-in-right">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500">
              <Image
                src="/team-collaboration.jpg"
                alt="Team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-primary/30 rounded-xl p-6 shadow-2xl max-w-xs animate-float" style={{ animationDelay: '0.5s' }}>
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Company Stats</p>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Digital Solutions Delivered</p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group stagger-item p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/60 hover:bg-card/80 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Trust Section */}
        <div className="mt-24 pt-20 border-t border-primary/10 animate-fade-in-up">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Trusted by Leaders</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Businesses Across Industries
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From established enterprises to fast-growing SMEs, organizations across multiple industries rely on us to deliver secure, scalable, and high-quality digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Enterprise Solutions", desc: "Large-scale systems & platforms" },
              { name: "Technology Companies", desc: "Product & platform development" },
              { name: "Healthcare & Life Sciences", desc: "Secure and compliant systems" },
              { name: "Financial Services", desc: "Scalable & secure applications" },
              { name: "Retail & E-Commerce", desc: "Digital commerce solutions" },
              { name: "SaaS & Cloud Products", desc: "Subscription-based platforms" },
            ].map((category, idx) => (
              <div
                key={category.name}
                className="group stagger-item p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/60 hover:bg-card/80 transition-all duration-500 text-center cursor-pointer hover:-translate-y-2 hover:shadow-lg"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <p className="font-bold text-foreground mb-2 text-sm leading-tight">{category.name}</p>
                <p className="text-xs text-muted-foreground">{category.desc}</p>
                <div className="mt-3 pt-3 border-t border-primary/10 group-hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto group-hover:scale-150 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Clients Worldwide" },
              { value: "100+", label: "Projects Delivered" },
              { value: "20+", label: "Industries Served" },
              { value: "99.9%", label: "Platform Reliability" },
            ].map((stat, idx) => (
              <div key={stat.label} className="stagger-item text-center p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
