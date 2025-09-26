import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Ship, Plane, Sparkles, Shield, Droplets } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Automotive Detailing",
      description: "Complete interior and exterior detailing for luxury vehicles",
      features: [
        "Paint correction & polishing",
        "Ceramic coating application",
        "Interior deep cleaning",
        "Engine bay detailing",
      ],
    },
    {
      icon: Ship,
      title: "Marine Detailing",
      description: "Specialized care for boats and watercraft",
      features: ["Hull cleaning & polishing", "Deck restoration", "Teak treatment", "Interior cabin detailing"],
    },
    {
      icon: Plane,
      title: "Aircraft Detailing",
      description: "Professional aviation detailing services",
      features: ["Exterior washing & polishing", "Interior sanitization", "Hangar preparation", "Pre-flight detailing"],
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="metallic-text">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From land to sea to sky, we provide comprehensive detailing services that exceed expectations and preserve
            your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-glow group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-lg font-serif text-foreground">Paint Protection</CardTitle>
                  <CardDescription>Advanced ceramic coatings and paint protection films</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Droplets className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-lg font-serif text-foreground">Maintenance Programs</CardTitle>
                  <CardDescription>Regular maintenance schedules to keep your vehicles pristine</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
