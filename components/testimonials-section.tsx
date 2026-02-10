"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Valid star ratings: 3.5, 4.0, 4.5, 5.0
const VALID_RATINGS = [3.5, 4.0, 4.5, 5.0]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Technology Services Firm",
    content:
      "The team demonstrated a strong understanding of enterprise architecture and delivery standards. Communication was consistent, and the project was delivered exactly as scoped. We appreciated their structured approach and technical depth.",
    result: "Improved platform stability and scalability",
    rating: 4.0,
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Healthcare Startup",
    content:
      "They translated our product vision into a well-structured mobile application. The development process was transparent, and the team was responsive to feedback throughout each phase.",
    result: "Successful product launch",
    rating: 5.0,
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product",
    company: "Retail Company",
    content:
      "The UI/UX improvements made a noticeable difference in usability and customer engagement. Their designers worked closely with our internal team and delivered a clean, consistent experience.",
    result: "Enhanced user experience",
    rating: 4.5,
  },
  {
    name: "David Park",
    role: "VP Engineering",
    company: "Cloud Solutions Provider",
    content:
      "We partnered with them to modernize parts of our backend infrastructure. The team showed strong technical ownership and delivered scalable solutions aligned with our long-term roadmap.",
    result: "Modernized system architecture",
    rating: 5.0,
  },
  {
    name: "Jessica Williams",
    role: "CEO",
    company: "Data Analytics Company",
    content:
      "They took time to understand our requirements before proposing solutions. The final platform met both our technical and business expectations.",
    result: "Streamlined analytics platform",
    rating: 4.0,
  },
  {
    name: "James Thompson",
    role: "Product Lead",
    company: "Financial Services Firm",
    content:
      "Security and reliability were critical for our project. Their team followed best practices and delivered a solution that aligned well with our compliance requirements.",
    result: "Secure and compliant application",
    rating: 4.5,
  },
]

// Helper function to render stars based on rating
function StarRating({ rating }: { rating: number }) {
  // Validate rating
  if (!VALID_RATINGS.includes(rating)) {
    console.warn(`Invalid rating: ${rating}. Using 4.0 as default.`)
    return null
  }

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-[#FFC107]" />
          <div className="absolute inset-0 w-2 overflow-hidden">
            <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground" />
      ))}
    </div>
  )
}

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
            Hear from clients about their experience working with our team and delivering reliable digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.name} className="group bg-background border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-foreground mb-6 leading-relaxed text-base flex-grow">{testimonial.content}</p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Outcome</p>
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
