"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of electrical appliances do you repair?",
    answer:
      "We repair all types of household and commercial electrical appliances including refrigerators, washing machines, dryers, dishwashers, ovens, microwaves, air conditioners, and small appliances. Our technicians are trained to work on all major brands.",
  },
  {
    question: "Do you offer emergency electrical services?",
    answer:
      "Yes, we provide 24/7 emergency electrical services. If you have a power outage, electrical fault, or safety hazard, call us immediately at (555) 123-4567. Our emergency response team is available around the clock.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies depending on the type of service and complexity of the work. We provide free estimates for most services and offer upfront pricing with no hidden fees. Emergency services may have additional charges for after-hours calls.",
  },
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "Yes, all our electricians are fully licensed, certified, and insured. Our team includes master electricians with extensive training and ongoing professional development. We carry comprehensive liability insurance for your protection.",
  },
  {
    question: "Do you provide warranties on your work?",
    answer:
      "Yes, we stand behind our work with comprehensive warranties. Parts typically come with manufacturer warranties, and our labor is guaranteed for 90 days. We also offer extended warranty options for major repairs and installations.",
  },
  {
    question: "How quickly can you respond to service calls?",
    answer:
      "For non-emergency services, we typically schedule appointments within 24-48 hours. Same-day service is often available for urgent repairs. Emergency calls receive immediate response, usually within 1-2 hours depending on your location.",
  },
  {
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Yes, we provide electrical services for both residential and commercial properties. Our team has experience with single-family homes, apartments, office buildings, retail stores, restaurants, and warehouses.",
  },
  {
    question: "What should I do if I smell burning or see sparks from an outlet?",
    answer:
      "If you smell burning or see sparks, immediately turn off the power at the circuit breaker and call us for emergency service at (555) 123-4567. Do not use the outlet or attempt repairs yourself. This could indicate a serious electrical hazard.",
  },
  {
    question: "Can you help with energy efficiency improvements?",
    answer:
      "We offer energy efficiency consulting services including energy audits, LED lighting upgrades, smart thermostat installation, and recommendations for reducing your energy costs. We can help you save money on your electric bills.",
  },
  {
    question: "Do you sell electrical parts and accessories?",
    answer:
      "Yes, we sell certified spare parts and electrical accessories for all major brands. We stock OEM replacement parts and can order specific components as needed. Installation is available for all parts we sell.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. We also offer financing options for larger projects. Payment is typically due upon completion of work, and we provide detailed invoices for all services.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:5551234567"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
