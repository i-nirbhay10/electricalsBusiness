import type { Metadata } from "next"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Electrical Services FAQ",
  description:
    "Find answers to common questions about our electrical services, pricing, emergency repairs, and more. Get the information you need.",
}

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl opacity-90">Get answers to common questions about our services</p>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  )
}
