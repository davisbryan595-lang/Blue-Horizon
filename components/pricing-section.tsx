import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Essential",
      price: "Starting at $150",
      description: "Perfect for regular maintenance and basic detailing needs",
      features: [
        "Exterior wash & dry",
        "Interior vacuum & wipe down",
        "Window cleaning",
        "Tire shine",
        "Basic protection",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "Starting at $350",
      description: "Comprehensive detailing for the discerning vehicle owner",
      features: [
        "Everything in Essential",
        "Paint correction",
        "Interior deep cleaning",
        "Engine bay detailing",
        "6-month protection",
        "Before/after photos",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "Starting at $650",
      description: "The ultimate in luxury vehicle care and protection",
      features: [
        "Everything in Premium",
        "Ceramic coating application",
        "Paint protection film",
        "Interior protection treatment",
        "12-month warranty",
        "Maintenance program included",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            <span className="metallic-text">Investment</span> in Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect detailing package for your vehicle. All services include mobile convenience and
            veteran-quality workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border ${tier.popular ? "ring-2 ring-primary glow-effect" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-foreground">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90 glow-effect" : "bg-secondary hover:bg-secondary/90"}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            *Pricing varies based on vehicle size, condition, and specific requirements
          </p>
          <Button variant="outline" size="lg" className="hover-glow bg-transparent">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
