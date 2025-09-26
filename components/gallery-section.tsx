"use client"

import { useState } from "react"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Work" },
    { id: "cars", label: "Automotive" },
    { id: "boats", label: "Marine" },
    { id: "aircraft", label: "Aviation" },
  ]

  const galleryItems = [
    { id: 1, category: "cars", title: "Luxury Sedan Detail", image: "/before-and-after-luxury-car-detailing-transformati.jpg" },
    { id: 2, category: "boats", title: "Yacht Restoration", image: "/pristine-yacht-deck-after-professional-detailing.jpg" },
    { id: 3, category: "aircraft", title: "Private Jet Detailing", image: "/gleaming-private-jet-exterior-after-detailing.jpg" },
    { id: 4, category: "cars", title: "Sports Car Polish", image: "/high-end-sports-car-with-perfect-paint-finish.jpg" },
    { id: 5, category: "boats", title: "Sailboat Care", image: "/beautiful-sailboat-with-polished-hull.jpg" },
    { id: 6, category: "aircraft", title: "Aircraft Interior", image: "/luxury-aircraft-interior-after-professional-cleani.jpg" },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="gold-accent">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See the transformation and attention to detail that sets Blue Horizon apart from the competition.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow-effect"
                  : "bg-card text-muted-foreground hover:bg-primary/20 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg hover-glow">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-serif font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
