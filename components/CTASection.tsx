import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Contact us today for professional electrical services. Free estimates, same-day service available, and 24/7
          emergency support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link href="tel:5551234567">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (555) 123-4567
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm opacity-80">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">13+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">500+</div>
            <div className="text-sm opacity-80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-80">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
