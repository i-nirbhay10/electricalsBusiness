import Link from "next/link"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield",
    rating: 5,
    text: "Shove Electricals saved the day when our refrigerator broke down. Professional, knowledgeable, and fairly priced. Highly recommend!",
  },
  {
    name: "Mike Chen",
    location: "Downtown Springfield",
    rating: 5,
    text: "Had them install new outlets and upgrade our electrical panel. The team was punctual, clean, and explained everything they were doing.",
  },
  {
    name: "Lisa Rodriguez",
    location: "West Springfield",
    rating: 5,
    text: "Called them at 10 PM when we lost power. They came out immediately and fixed the problem safely. True professionals!",
  },
]

export default function TestimonialsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-6 h-6 text-blue-200" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/testimonials">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
