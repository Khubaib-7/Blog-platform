import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CalendarDays,
  Clock,
  User,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  Eye,
  Heart,
  ArrowRight,
  Star,
} from "lucide-react"

const articles = [
  {
    id: 1,
    title: "10 Tips for Successful Blogging",
    excerpt:
      "Learn how to create engaging blog content that drives traffic and builds your audience with these proven strategies.",
    content: "Full blog post content would go here...",
    author: "John Doe",
    authorId: 1,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blogging",
    categorySlug: "blogging",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    featured: true,
    views: "2.5K",
    likes: 124,
    comments: 18,
    rating: 4.8,
    tags: ["Blogging", "Content Strategy", "SEO"],
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "The Next Generation Social AI App",
    excerpt: "Discover how artificial intelligence is revolutionizing social media platforms and user interactions.",
    content: "Full blog post content would go here...",
    author: "Sarah Johnson",
    authorId: 2,
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "1.8K",
    likes: 89,
    comments: 12,
    rating: 4.6,
    tags: ["AI", "Social Media", "Technology"],
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "REVOLUTION in Web Development",
    excerpt:
      "Explore the cutting-edge technologies and frameworks that are transforming how we build web applications.",
    content: "Full blog post content would go here...",
    author: "Mike Chen",
    authorId: 3,
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Web Development",
    categorySlug: "web-development",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "3.2K",
    likes: 156,
    comments: 24,
    rating: 4.9,
    tags: ["Web Development", "JavaScript", "React"],
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures and best practices for protecting your cloud infrastructure and data.",
    content: "Full blog post content would go here...",
    author: "Emily Rodriguez",
    authorId: 4,
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Cybersecurity",
    categorySlug: "cybersecurity",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "1.4K",
    likes: 73,
    comments: 9,
    rating: 4.5,
    tags: ["Security", "Cloud", "Best Practices"],
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Modern UI/UX Design Trends",
    excerpt: "Stay ahead of the curve with the latest design trends and user experience principles for 2024.",
    content: "Full blog post content would go here...",
    author: "David Kim",
    authorId: 5,
    date: "2024-01-05",
    readTime: "7 min read",
    category: "UI/UX Design",
    categorySlug: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    featured: true,
    views: "2.1K",
    likes: 98,
    comments: 15,
    rating: 4.7,
    tags: ["Design", "UX", "Trends"],
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "API Integration Strategies",
    excerpt: "Master the art of seamless API integration with these proven strategies and best practices.",
    content: "Full blog post content would go here...",
    author: "Lisa Wang",
    authorId: 6,
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Web Development",
    categorySlug: "web-development",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "1.9K",
    likes: 87,
    comments: 11,
    rating: 4.4,
    tags: ["API", "Integration", "Backend"],
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "Machine Learning for Beginners",
    excerpt: "A comprehensive introduction to machine learning concepts, algorithms, and practical applications.",
    content: "Full blog post content would go here...",
    author: "Tom Anderson",
    authorId: 7,
    date: "2024-01-01",
    readTime: "15 min read",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "2.8K",
    likes: 142,
    comments: 28,
    rating: 4.8,
    tags: ["Machine Learning", "AI", "Beginner"],
    difficulty: "Beginner",
  },
  {
    id: 8,
    title: "Docker Containerization Guide",
    excerpt: "Learn how to containerize your applications with Docker for better deployment and scalability.",
    content: "Full blog post content would go here...",
    author: "Alex Johnson",
    authorId: 8,
    date: "2023-12-28",
    readTime: "11 min read",
    category: "DevOps",
    categorySlug: "devops",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80",
    featured: false,
    views: "1.6K",
    likes: 65,
    comments: 7,
    rating: 4.3,
    tags: ["Docker", "DevOps", "Containers"],
    difficulty: "Intermediate",
  },
]

const categories = [
  "All Categories",
  "Web Development",
  "Artificial Intelligence",
  "UI/UX Design",
  "Cybersecurity",
  "DevOps",
  "Mobile Development",
  "Data Science",
  "Blogging",
]

const sortOptions = ["Latest", "Most Popular", "Most Views", "Highest Rated", "Most Liked", "Most Comments", "Oldest"]

const difficultyLevels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

export default function ArticlesPage() {
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-semibold tracking-wider uppercase">
                Knowledge Library
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Articles
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of articles covering technology, design, development, and more. Find
              insights that matter to you.
            </p>

            {/* Advanced Search and Filter Bar */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, authors, or topics..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <select className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {difficultyLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <select className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-4 py-3 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white rounded-full bg-transparent"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">{articles.length}+</div>
                <div className="text-gray-400">Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-400">Authors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400">Total Likes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-orange-400" />
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                ⭐ Editor's Choice
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="group">
                  <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                    <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-3xl overflow-hidden h-full">
                      <div className="relative">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={600}
                          height={300}
                          className="w-full h-48 lg:h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                            ⭐ Featured
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-900/80 backdrop-blur-sm text-gray-300 border-0">
                            {article.category}
                          </Badge>
                          <Badge
                            className={`border-0 text-white text-xs ${
                              article.difficulty === "Beginner"
                                ? "bg-green-500"
                                : article.difficulty === "Intermediate"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }`}
                          >
                            {article.difficulty}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.likes}</span>
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{article.rating}</span>
                          </div>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-gray-400">{article.comments} comments</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                          <Link href={`/blog/${article.id}`}>{article.title}</Link>
                        </h3>
                      </CardHeader>

                      <CardContent className="pt-0 space-y-4">
                        <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>

                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">{article.author}</p>
                              <div className="flex items-center gap-3 text-xs text-gray-400">
                                <div className="flex items-center gap-1">
                                  <CalendarDays className="w-3 h-3" />
                                  <span>{new Date(article.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{article.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Link
                            href={`/blog/${article.id}`}
                            className="group/btn px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            <span className="flex items-center gap-2">
                              Read More
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <span className="text-gray-400 text-sm">
                Showing {regularArticles.length} of {articles.length} articles
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <div key={article.id} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-600/50 hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 transition-all duration-300">
                  <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-2xl overflow-hidden h-full hover:bg-gray-800 transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="secondary" className="bg-gray-900/80 backdrop-blur-sm text-gray-300 border-0">
                          {article.category}
                        </Badge>
                        <Badge
                          className={`border-0 text-white text-xs ${
                            article.difficulty === "Beginner"
                              ? "bg-green-500"
                              : article.difficulty === "Intermediate"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {article.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-300">{article.rating}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs text-gray-400">{article.comments} comments</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
                        <Link href={`/blog/${article.id}`}>{article.title}</Link>
                      </h3>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      <p className="text-gray-300 line-clamp-3 leading-relaxed">{article.excerpt}</p>

                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{article.author}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${article.id}`}
                          className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 flex items-center gap-1 group/link"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <span className="flex items-center gap-2">
                Load More Articles
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Article</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
