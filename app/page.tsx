import Hero from "@/components/Hero"
import ServicesHighlight from "@/components/ServicesHighlight"
import WhyChooseUs from "@/components/WhyChooseUs"
import TestimonialsPreview from "@/components/TestimonialsPreview"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "Professional Electrical Services & Appliance Repair",
  description:
    "Expert electrical appliance repair, installation, and maintenance services. Available 24/7 for emergency repairs. Contact us for reliable electrical solutions.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}
