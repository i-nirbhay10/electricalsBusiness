import type { Metadata } from "next"
import { Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Customer Testimonials - What Our Clients Say",
  description:
    "Read reviews and testimonials from satisfied customers of Shove Electricals. See why we are the trusted choice for electrical services.",
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield",
    service: "Appliance Repair",
    rating: 5,
    text: "Shove Electricals saved the day when our refrigerator broke down. John arrived within 2 hours and had it fixed in no time. Professional, knowledgeable, and fairly priced. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Mike Chen",
    location: "Downtown Springfield",
    service: "Electrical Installation",
    rating: 5,
    text: "Had them install new outlets and upgrade our electrical panel. The team was punctual, clean, and explained everything they were doing. Great work and excellent customer service.",
    date: "1 month ago",
  },
  {
    name: "Lisa Rodriguez",
    location: "West Springfield",
    service: "Emergency Repair",
    rating: 5,
    text: "Called them at 10 PM when we lost power in half our house. They came out immediately and fixed the problem safely. True professionals who care about their customers.",
    date: "3 weeks ago",
  },
  {
    name: "David Thompson",
    location: "Springfield Heights",
    service: "Preventive Maintenance",
    rating: 5,
    text: "Regular maintenance service has prevented several potential issues. Sarah is thorough and always explains what she finds. Worth every penny for peace of mind.",
    date: "1 week ago",
  },
  {
    name: "Jennifer Walsh",
    location: "East Springfield",
    service: "Wiring & Rewiring",
    rating: 5,
    text: "Complete rewiring of our 1950s home. The team was professional, kept everything clean, and finished on schedule. Our home is now safe and up to code.",
    date: "2 months ago",
  },
  {
    name: "Robert Kim",
    location: "Springfield Business District",
    service: "Commercial Installation",
    rating: 5,
    text: "Installed electrical systems for our new restaurant. Professional, efficient, and worked around our tight schedule. Excellent communication throughout the project.",
    date: "1 month ago",
  },
  {
    name: "Amanda Foster",
    location: "North Springfield",
    service: "Energy Efficiency Consulting",
    rating: 5,
    text: "Mike helped us reduce our energy bills by 30% with LED upgrades and smart thermostats. Great advice and professional installation. Very satisfied!",
    date: "3 weeks ago",
  },
  {
    name: "Tom Bradley",
    location: "Springfield Suburbs",
    service: "Appliance Repair",
    rating: 5,
    text: "Washing machine repair was done quickly and efficiently. Fair pricing and they even gave tips on maintenance. Will definitely use them again.",
    date: "2 weeks ago",
  },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl md:text-2xl opacity-90">See what our satisfied customers have to say</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Satisfied Customers?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for professional electrical services you can trust</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:5551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
