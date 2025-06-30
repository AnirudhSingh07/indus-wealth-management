import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, TrendingUp, PiggyBank, Calculator, Shield, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArticlesPage() {
  const categories = [
    { name: "All", count: 45, active: true },
    { name: "Investments", count: 15, active: false },
    { name: "Tax Planning", count: 8, active: false },
    { name: "Retirement", count: 12, active: false },
    { name: "SIP", count: 6, active: false },
    { name: "Insurance", count: 4, active: false },
  ]

  const featuredArticles = [
    {
      title: "Complete Guide to SIP Investment in 2024",
      excerpt:
        "Learn everything about Systematic Investment Plans, their benefits, and how to choose the right SIP for your financial goals.",
      category: "SIP",
      author: "Rajesh Gupta",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "Tax Saving Strategies for FY 2024-25",
      excerpt:
        "Maximize your tax savings with these proven strategies and investment options under Section 80C and other provisions.",
      category: "Tax Planning",
      author: "Priya Mehta",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
  ]

  const articles = [
    {
      title: "How to Build a Diversified Mutual Fund Portfolio",
      excerpt:
        "A step-by-step guide to creating a well-balanced mutual fund portfolio that aligns with your risk tolerance and goals.",
      category: "Investments",
      author: "Amit Singh",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Retirement Planning: How Much is Enough?",
      excerpt:
        "Calculate your retirement corpus and learn strategies to build a sufficient retirement fund for a comfortable future.",
      category: "Retirement",
      author: "Rajesh Gupta",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Term Insurance vs Endowment Plans: Which is Better?",
      excerpt:
        "Compare term insurance and endowment plans to make an informed decision about your life insurance needs.",
      category: "Insurance",
      author: "Priya Mehta",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "ELSS vs PPF: Best Tax Saving Options Compared",
      excerpt: "Detailed comparison of ELSS and PPF to help you choose the best tax-saving investment for your needs.",
      category: "Tax Planning",
      author: "Amit Singh",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Understanding Market Volatility and Your Investments",
      excerpt:
        "Learn how market volatility affects your investments and strategies to navigate through volatile market conditions.",
      category: "Investments",
      author: "Rajesh Gupta",
      date: "Nov 30, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Emergency Fund: How Much Should You Save?",
      excerpt:
        "Guidelines for building an adequate emergency fund and where to park your emergency money for easy access.",
      category: "Investments",
      author: "Priya Mehta",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Investments":
        return TrendingUp
      case "Tax Planning":
        return Calculator
      case "Retirement":
        return PiggyBank
      case "Insurance":
        return Shield
      default:
        return TrendingUp
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">Financial Articles</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Insights &<span className="text-gold-400"> Expert Advice</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Coming Soon!
            </p>

            {/* Search Bar */}
            {/* <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Articles */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-gray-600">Our most popular and insightful articles</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-black">Featured</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold hover:text-blue-600 transition-colors">
                    <Link href="#">{article.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* All Articles */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our latest financial insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category)
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <CategoryIcon className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href="#">{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Financial Insights</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest financial articles delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold">Subscribe</Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
