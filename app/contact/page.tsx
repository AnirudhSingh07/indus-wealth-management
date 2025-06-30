import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Indus Wealth Management Pvt. Ltd.",
        "Tower A, 15th Floor",
        "Business Park, Andheri East",
        "Mumbai - 400069, Maharashtra",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 22 4567 8900 (Main)", "+91 98765 43210 (Mobile)", "1800-123-4567 (Toll Free)"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@induswealthmanagement.com",
        "support@induswealthmanagement.com",
        "careers@induswealthmanagement.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7",
      ],
    },
  ]

  const offices = [
    {
      city: "Mumbai",
      address: "Tower A, 15th Floor, Business Park, Andheri East, Mumbai - 400069",
      phone: "+91 22 4567 8900",
      email: "mumbai@induswealthmanagement.com",
    },
    {
      city: "Delhi",
      address: "Plot No. 123, Sector 44, Gurgaon, Haryana - 122003",
      phone: "+91 124 456 7890",
      email: "delhi@induswealthmanagement.com",
    },
    {
      city: "Bangalore",
      address: "5th Floor, Tech Park, Electronic City, Bangalore - 560100",
      phone: "+91 80 2345 6789",
      email: "bangalore@induswealthmanagement.com",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with
              <span className="text-gold-400"> Our Experts</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your wealth management journey? Our team of financial experts is here to help you achieve
              your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="consent" className="mt-1" />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          I agree to receive communications from Indus Wealth Management and understand that I can
                          unsubscribe at any time.
                        </label>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We're here to help you with all your financial planning needs. Reach out to us through any of the
                    following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <info.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-600 text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our offices across major cities in India.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm text-left">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
            <p className="text-gray-600">Our Mumbai headquarters location</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Integration</p>
                  <p className="text-sm text-gray-500">Google Maps would be embedded here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a free consultation with our financial experts and take the first step towards achieving your
            financial goals.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
