import type { Metadata } from "next"
import { Wrench, Zap, Settings, AlertTriangle, Lightbulb, ShoppingCart, Home, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - Complete Electrical Solutions",
  description:
    "Comprehensive electrical services including appliance repair, installation, maintenance, emergency repairs, wiring, and energy efficiency consulting.",
}

const services = [
  {
    icon: Wrench,
    title: "Electrical Appliance Repair",
    description: "Expert repair services for all types of household and commercial electrical appliances.",
    features: [
      "Refrigerators & Freezers",
      "Washing Machines & Dryers",
      "Dishwashers",
      "Ovens & Microwaves",
      "Air Conditioners",
      "Small Appliances",
    ],
  },
  {
    icon: Settings,
    title: "Installation Services",
    description: "Professional installation of household and commercial electrical appliances.",
    features: [
      "New Appliance Installation",
      "Electrical Panel Upgrades",
      "Outlet & Switch Installation",
      "Ceiling Fan Installation",
      "Light Fixture Installation",
      "Smart Home Device Setup",
    ],
  },
  {
    icon: Zap,
    title: "Preventive Maintenance",
    description: "Regular maintenance services to keep your electrical systems running efficiently.",
    features: [
      "Electrical System Inspections",
      "Appliance Tune-ups",
      "Safety Checks",
      "Performance Optimization",
      "Preventive Repairs",
      "Maintenance Scheduling",
    ],
  },
  {
    icon: Home,
    title: "Wiring & Rewiring",
    description: "Complete wiring solutions for homes and offices, from new installations to upgrades.",
    features: [
      "New Construction Wiring",
      "Home Rewiring",
      "Office Electrical Systems",
      "Code Compliance Updates",
      "Circuit Installation",
      "Electrical Troubleshooting",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repair Services",
    description: "24/7 emergency electrical repair services for urgent electrical issues.",
    features: [
      "24/7 Availability",
      "Power Outage Solutions",
      "Electrical Fault Diagnosis",
      "Emergency Repairs",
      "Safety Hazard Resolution",
      "Rapid Response Team",
    ],
  },
  {
    icon: Lightbulb,
    title: "Energy Efficiency Consulting",
    description: "Professional consulting to improve energy efficiency and electrical safety.",
    features: [
      "Energy Audits",
      "Efficiency Recommendations",
      "LED Lighting Upgrades",
      "Smart Thermostat Installation",
      "Power Usage Analysis",
      "Cost Saving Solutions",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Spare Parts & Accessories",
    description: "Sales of certified spare parts and electrical accessories for all major brands.",
    features: [
      "OEM Replacement Parts",
      "Electrical Components",
      "Safety Accessories",
      "Quality Guaranteed",
      "Competitive Pricing",
      "Installation Available",
    ],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">Comprehensive electrical solutions for all your needs</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold">Residential Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete electrical solutions for your home, from small repairs to major installations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Single-family homes</li>
                <li>• Apartments & condos</li>
                <li>• Townhouses</li>
                <li>• Mobile homes</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Building className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold">Commercial Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional electrical services for businesses and commercial properties.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Office buildings</li>
                <li>• Retail stores</li>
                <li>• Restaurants</li>
                <li>• Warehouses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
