"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "FinanceFlow Dashboard",
    category: "Web Application",
    description: "Enterprise financial management platform with real-time analytics and reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    result: "40% increase in operational efficiency",
    color: "from-[#0A2E6E] to-[#00A8FF]",
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description: "HIPAA-compliant patient management app for healthcare providers.",
    tags: ["React Native", "AWS", "GraphQL"],
    result: "150K+ active users",
    color: "from-[#00A8FF] to-[#0A2E6E]",
  },
  {
    title: "RetailHub E-commerce",
    category: "E-commerce Platform",
    description: "Scalable multi-vendor marketplace with AI-powered recommendations.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    result: "$2M+ in monthly transactions",
    color: "from-[#0A2E6E] to-[#00A8FF]",
  },
  {
    title: "LogiTrack System",
    category: "Enterprise Software",
    description: "Real-time fleet management and logistics optimization platform.",
    tags: ["Python", "IoT", "Machine Learning"],
    result: "30% reduction in delivery times",
    color: "from-[#00A8FF] to-[#0A2E6E]",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Enterprise Solutions Delivering Real Results
          </h2>
          <p className="text-muted-foreground text-lg">
            Proven track record of transforming businesses with innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient Background with Animation */}
              <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)`,
                  backgroundSize: '40px 40px'
                }} />
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="bg-muted/40 rounded-lg p-4 mb-6 border border-primary/10">
                  <p className="text-sm font-semibold text-primary mb-1">Results Achieved</p>
                  <p className="text-foreground font-bold">{project.result}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
