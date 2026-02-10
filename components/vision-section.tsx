"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Your Success is Our Mission</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Your Vision,
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">Our Expertise</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We transform ambitious ideas into market-ready digital solutions. From concept to deployment, our team brings deep technical expertise, proven methodologies, and a commitment to delivering excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-lg group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 rounded-lg border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/60"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Global Clients" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
