"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background with hero image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-tech-abstract-back-ground.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Trusted by Enterprises & Growing Businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Enterprise Software Built for<span className="text-primary"> Scale</span>

            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              We deliver custom software solutions, mobile applications, and UI/UX design that help enterprises and SMEs build scalable, secure, and high-performance digital products across global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base group rounded-lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button size="lg" variant="outline" className="px-8 py-6 text-base border-primary/50 text-foreground hover:bg-primary/10 rounded-lg">
                Request Consultation
              </Button> */}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "Global", label: "Client Reach" },
                { value: "3+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden md:block relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <Image
                src="/hero-tech-abstract.jpg"
                alt="Technology showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-xl p-4 shadow-xl max-w-xs">
              <p className="text-sm font-semibold text-foreground mb-2">Experienced Delivery Teams</p>
              <p className="text-xs text-muted-foreground">Skilled engineers delivering reliable and scalable digital solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:block hidden">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
