"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, TechVentures Inc",
    company: "TechVentures",
    content: "NexaTech delivered our enterprise platform 2 weeks ahead of schedule. Their technical expertise and attention to detail exceeded every expectation we had.",
    result: "+40% Operational Efficiency",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthFirst",
    company: "HealthFirst",
    content: "A complete game-changer. They transformed our vision into a mobile app our users absolutely love. The responsiveness and professionalism are unmatched in the industry.",
    result: "$5M+ Series A Funding",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product, RetailMax",
    company: "RetailMax",
    content: "The UI/UX redesign completely transformed our e-commerce presence. Conversion rates jumped 35% in the first month. Outstanding partnership.",
    result: "+35% Conversion Rate",
    rating: 5,
  },
  {
    name: "David Park",
    role: "VP Engineering, CloudScale",
    company: "CloudScale",
    content: "Exceptional technical team. They built our microservices architecture handling 10M+ daily transactions. Reliable, scalable, and cost-effective.",
    result: "10M+ Daily Users",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "CEO, DataFlow Analytics",
    company: "DataFlow",
    content: "NexaTech understood our complex requirements and delivered a cutting-edge analytics platform. ROI exceeded projections by 50%.",
    result: "+50% ROI Growth",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Chief Product Officer, FinanceHub",
    company: "FinanceHub",
    content: "Security, compliance, and innovation all in one. NexaTech built our fintech platform to banking standards. Highly recommended.",
    result: "SOC 2 Type II Certified",
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Proven Results from Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how enterprise clients transformed their businesses with NexaTech's solutions and achieved measurable ROI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.name} className="group bg-background border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed text-base flex-grow">{testimonial.content}</p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Business Impact</p>
                  <p className="text-primary font-bold">{testimonial.result}</p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{testimonial.role}</div>
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
