import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Users, Award, Star, CheckCircle } from "lucide-react"
import { AuroraBackgroundDemo } from "@/components/background"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your goals and risk profile.",
    },
    {
      icon: Shield,
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund selection and portfolio optimization.",
    },
    {
      icon: Users,
      title: "Insurance Planning",
      description: "Protect your wealth with comprehensive insurance solutions.",
    },
    {
      icon: Award,
      title: "Retirement Planning",
      description: "Secure your future with strategic retirement planning services.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "Indus Wealth Management transformed my financial outlook. Their personalized approach helped me achieve my investment goals.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Professional service and excellent returns on my mutual fund investments. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Doctor",
      content: "Their retirement planning strategy gave me peace of mind about my future financial security.",
      rating: 5,
    },
  ]

  // const stats = [
  //   { value: "₹500+ Cr", label: "Assets Under Management" },
  //   { value: "2000+", label: "Happy Clients" },
  //   { value: "15+", label: "Years Experience" },
  //   { value: "98%", label: "Client Satisfaction" },
  // ]

  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AuroraBackgroundDemo />
      {/* <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/iwm-logo.png')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30 hover:bg-gold-500/30">
              Trusted Financial Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Simplifying Wealth,
              <span className="text-gold-400"> Amplifying Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your one-stop solution for financial planning, investments, and wealth management services. Build a secure
              financial future with expert guidance.
            </p>
            
          </div>
        </div> */}

        {/* Stats Section */}
        {/* <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </section> */}

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extralight text-gray-900 mb-4">About Indus Wealth Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to helping individuals and families achieve their financial goals through personalized
                investment management solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6 font-light text-lg leading-relaxed">
                  To democratize wealth creation by providing accessible, transparent, and personalized financial
                  services that empower our clients to build lasting prosperity.
                </p>

                <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Vision</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                  To become India's most trusted wealth management partner, known for our integrity, expertise, and
                  commitment to client success.
                </p>

                <div className="space-y-4">
                  {[
                    "SEBI Registered Investment Advisors",
                    "Transparent Fee Structure",
                    "Personalized Investment Strategies",
                    "24/7 Client Support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <Image
                    src="/iwm-logo.png?height=400&width=500"
                    alt="Financial Planning"
                    width={500}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied clients across India.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get personalized financial advice from our expert team. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/articles">
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 bg-transparent"
              >
                Read Our Articles
              </Button> */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
