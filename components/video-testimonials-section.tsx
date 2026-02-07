"use client"

import { Play, Pause } from "lucide-react"
import { useState } from "react"

const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechScale Inc",
    title: "How NexaTech Accelerated Our Growth",
    thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500",
    description: "We needed a scalable platform and NexaTech delivered in 4 months. The results exceeded all expectations.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "VP Engineering, CloudFirst",
    title: "Building Enterprise Solutions with Confidence",
    thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "Their technical expertise and reliability gave us the confidence to scale to millions of users.",
  },
  {
    id: 3,
    name: "Lisa Wang",
    role: "Founder, HealthTech Solutions",
    title: "Transforming Healthcare with Technology",
    thumbnail: "bg-gradient-to-br from-emerald-500 to-teal-500",
    description: "NexaTech understood the complexity of healthcare requirements and built a HIPAA-compliant platform.",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "CTO, FinServe Global",
    title: "Enterprise Security That Delivers",
    thumbnail: "bg-gradient-to-br from-amber-500 to-orange-500",
    description: "Security and compliance are non-negotiable. NexaTech delivered both without compromising on features.",
  },
]

export function VideoTestimonialsSection() {
  const [playingId, setPlayingId] = useState<number | null>(null)

  return (
    <section id="video-testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Video Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            See Success in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch how industry leaders share their experience working with NexaTech and the tangible results they achieved
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setPlayingId(playingId === video.id ? null : video.id)}
            >
              {/* Video Thumbnail */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-primary/20 group-hover:border-primary/60 transition-all duration-300">
                <div className={`aspect-video ${video.thumbnail} flex items-center justify-center relative`}>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {playingId === video.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </div>
                  </div>
                  
                  {/* Video duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-lg text-white text-xs font-semibold">
                    2:45
                  </div>
                </div>

                {/* Video player overlay when playing */}
                {playingId === video.id && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Video testimonial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {video.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm">{video.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{video.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to see your business transform like these industry leaders?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold">
            Schedule a Consultation
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
