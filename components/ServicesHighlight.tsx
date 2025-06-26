import Link from "next/link"
import { Wrench, Zap, Settings, AlertTriangle, Lightbulb, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wrench,
    title: "Appliance Repair",
    description: "Expert repair for all household and commercial electrical appliances.",
    features: ["Refrigerators", "Washing Machines", "Dishwashers", "Ovens & Microwaves"],
  },
  {
    icon: Settings,
    title: "Installation Services",
    description: "Professional installation of electrical appliances and systems.",
    features: ["New Appliances", "Panel Upgrades", "Outlets & Switches", "Smart Devices"],
  },
  {
    icon: Zap,
    title: "Preventive Maintenance",
    description: "Regular maintenance to keep your electrical systems running efficiently.",
    features: ["System Inspections", "Safety Checks", "Performance Optimization", "Tune-ups"],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: "24/7 emergency electrical repair services for urgent issues.",
    features: ["24/7 Availability", "Power Outages", "Safety Hazards", "Rapid Response"],
  },
  {
    icon: Lightbulb,
    title: "Energy Efficiency",
    description: "Consulting to improve energy efficiency and reduce costs.",
    features: ["Energy Audits", "LED Upgrades", "Smart Thermostats", "Cost Analysis"],
  },
  {
    icon: ShoppingCart,
    title: "Parts & Accessories",
    description: "Certified spare parts and electrical accessories for all brands.",
    features: ["OEM Parts", "Quality Guaranteed", "Competitive Pricing", "Installation Available"],
  },
]

export default function ServicesHighlight() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical solutions for residential and commercial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-1 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
