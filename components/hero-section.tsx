import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Car, Ship, Plane } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-private-jet-on-tarmac-at-sunset-with-dramat.jpg" alt="Luxury aircraft detailing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance mb-6">
            <span className="metallic-text">Altitude to Horizon,</span>
            <br />
            <span className="text-foreground">Every Detail</span>
            <span className="gold-accent"> Matters</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Premium detailing services for cars, boats, and aircraft. Veteran-owned and operated in Spartanburg County.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-4 bg-transparent">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Cars</h3>
              <p className="text-muted-foreground">Premium automotive detailing</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">⛵</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Boats</h3>
              <p className="text-muted-foreground">Marine vessel care & detailing</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Aircraft</h3>
              <p className="text-muted-foreground">Aviation detailing & maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
