import { Shield, Award, Clock, Users, Wrench, Phone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed electricians with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Over 13 years of experience delivering exceptional electrical services with guaranteed satisfaction.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent electrical issues and emergency repairs.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified master electricians with extensive training and ongoing professional development.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art tools and diagnostic equipment for efficient and accurate service.",
  },
  {
    icon: Phone,
    title: "Reliable Support",
    description: "Responsive customer service and ongoing support for all your electrical needs.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shove Electricals?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality electrical services with professionalism and integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
