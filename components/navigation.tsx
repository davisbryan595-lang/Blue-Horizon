"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              alt="Blue Horizon Detailing"
              width={52}
              height={52}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">Blue Horizon</h1>
              <p className="text-sm text-muted-foreground">Aviation Detailing & More</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hover-glow bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              (727) 269-7757
            </Button>
            <Button className="bg-primary hover:bg-primary/90 glow-effect">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="#home" className="block text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="block text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="block text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#pricing" className="block text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                (727) 269-7757
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
