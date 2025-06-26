import type { Metadata } from "next";
import { Users, Award, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Our Story & Team",
  description:
    "Learn about Verma Electricals - our experienced team, company values, and commitment to providing reliable electrical services since our founding.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Verma Electricals
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your trusted partner for all electrical needs since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2010, Verma Electricals began as a small family
                business with a simple mission: to provide reliable,
                professional electrical services to our community. What started
                as a two-person operation has grown into a trusted team of
                certified electricians serving hundreds of satisfied customers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founder, John Shove, recognized the need for honest, skilled
                electrical work in our area. With over 15 years of experience in
                the electrical industry, he built Verma Electricals on the
                principles of quality workmanship, fair pricing, and exceptional
                customer service.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to uphold these values while expanding our
                services to meet the evolving needs of modern homes and
                businesses. From simple appliance repairs to complex electrical
                installations, we approach every job with the same dedication to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Every job is completed with the highest safety standards and
                proper certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-gray-600">
                We take pride in delivering exceptional workmanship that stands
                the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                On-time service and dependable solutions you can count on, every
                time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, understand, and
                deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Shove</h3>
              <p className="text-blue-600 mb-2">Founder & Master Electrician</p>
              <p className="text-gray-600 text-sm">
                15+ years experience, certified master electrician specializing
                in residential and commercial work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Mitchell</h3>
              <p className="text-blue-600 mb-2">Senior Electrician</p>
              <p className="text-gray-600 text-sm">
                10+ years experience in appliance repair and electrical
                troubleshooting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Rodriguez</h3>
              <p className="text-blue-600 mb-2">
                Electrician & Safety Specialist
              </p>
              <p className="text-gray-600 text-sm">
                8+ years experience with focus on electrical safety and energy
                efficiency consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
