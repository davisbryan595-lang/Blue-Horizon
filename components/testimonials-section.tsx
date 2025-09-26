import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Private Aircraft Owner",
      content:
        "Blue Horizon's attention to detail on my Cessna was exceptional. Zakariah and his team treated my aircraft like it was their own. The level of professionalism and quality is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "Luxury Car Enthusiast",
      content:
        "I've tried many detailing services, but none compare to Blue Horizon. The ceramic coating on my Porsche looks incredible, and their mobile service is so convenient. Highly recommended!",
      rating: 5,
    },
    {
      name: "Captain James Wilson",
      role: "Yacht Owner",
      content:
        "Outstanding work on my 45-foot yacht. The team's marine expertise really shows - they know exactly how to care for different materials and finishes. Will definitely use them again.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our <span className="gold-accent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it - hear from satisfied customers who trust Blue Horizon with their most
            valuable vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
