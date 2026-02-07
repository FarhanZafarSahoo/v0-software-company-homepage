"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, TechVentures Inc",
    content: "NexaTech delivered our enterprise platform 2 weeks ahead of schedule. Their attention to detail and technical expertise exceeded our expectations. We've seen a 40% improvement in our operational efficiency.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthFirst",
    content: "Working with NexaTech was a game-changer for our startup. They understood our vision and built a mobile app that our users love. The team's responsiveness and professionalism are unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product, RetailMax",
    content: "The UI/UX redesign transformed our e-commerce platform. Conversion rates jumped 35% within the first month. NexaTech's team truly understands how to create user experiences that convert.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Why Enterprise Leaders Trust Us
          </h2>
          <p className="text-muted-foreground text-lg">
            See how we've helped industry leaders transform their businesses and achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.name} className="group bg-background border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-8 leading-relaxed font-medium text-lg">{testimonial.content}</p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
