import { Shield, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Veteran-Owned Excellence in <span className="gold-accent">Detailing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Blue Horizon Aviation Detailing and More, we bring military precision and attention to detail to every
              vehicle we service. Founded by Zakariah Dorman, our veteran-owned business combines years of experience
              with a passion for perfection.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From luxury automobiles to private aircraft and marine vessels, we understand that your vehicles are
              investments that deserve the highest level of care. Our mobile service brings professional-grade detailing
              directly to you throughout Spartanburg County.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Veteran Owned</h3>
                <p className="text-sm text-muted-foreground">Military precision & integrity</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Luxury-grade materials & techniques</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Mobile Service</h3>
                <p className="text-sm text-muted-foreground">We come to you</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-detailer-working-on-luxury-car-in-han.jpg"
              alt="Professional detailing service"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
