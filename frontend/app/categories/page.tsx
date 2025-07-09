import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Palette,
  Shield,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Zap,
  TrendingUp,
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  Star,
  Users,
} from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-development",
    description: "Frontend, backend, and full-stack development tutorials, frameworks, and best practices.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    articles: 125,
    followers: "15.2K",
    trending: true,
    growth: "+12%",
    tags: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js"],
    difficulty: "Beginner to Advanced",
  },
  {
    id: 2,
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design principles, user experience, interface design, and design system insights.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    articles: 89,
    followers: "12.8K",
    trending: true,
    growth: "+8%",
    tags: ["Figma", "Design Systems", "User Research", "Prototyping"],
    difficulty: "Beginner to Intermediate",
  },
  {
    id: 3,
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Security best practices, threat analysis, data protection, and privacy guidelines.",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    articles: 67,
    followers: "9.4K",
    trending: false,
    growth: "+5%",
    tags: ["Security", "Privacy", "Encryption", "Penetration Testing"],
    difficulty: "Intermediate to Advanced",
  },
  {
    id: 4,
    name: "Mobile Development",
    slug: "mobile-development",
    description: "iOS, Android, React Native, and cross-platform mobile app development.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    articles: 78,
    followers: "8.7K",
    trending: false,
    growth: "+3%",
    tags: ["React Native", "Flutter", "iOS", "Android", "Swift"],
    difficulty: "Intermediate",
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Machine learning, deep learning, AI applications, and emerging technologies.",
    icon: Brain,
    color: "from-purple-500 to-violet-500",
    articles: 92,
    followers: "18.5K",
    trending: true,
    growth: "+25%",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    difficulty: "Intermediate to Advanced",
  },
  {
    id: 6,
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "AWS, Azure, Google Cloud, serverless architecture, and cloud-native development.",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    articles: 84,
    followers: "11.3K",
    trending: false,
    growth: "+7%",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Serverless"],
    difficulty: "Intermediate to Advanced",
  },
  {
    id: 7,
    name: "Data Science",
    slug: "data-science",
    description: "Data analysis, visualization, statistics, and data-driven decision making.",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    articles: 73,
    followers: "10.1K",
    trending: false,
    growth: "+4%",
    tags: ["Python", "R", "Data Visualization", "Statistics", "Analytics"],
    difficulty: "Intermediate",
  },
  {
    id: 8,
    name: "DevOps",
    slug: "devops",
    description: "CI/CD, automation, infrastructure as code, and development operations practices.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    articles: 56,
    followers: "7.9K",
    trending: false,
    growth: "+6%",
    tags: ["CI/CD", "Docker", "Jenkins", "Automation", "Monitoring"],
    difficulty: "Advanced",
  },
]

const popularTags = [
  { name: "JavaScript", count: 45, trending: true },
  { name: "React", count: 38, trending: true },
  { name: "Python", count: 32, trending: false },
  { name: "TypeScript", count: 29, trending: true },
  { name: "Node.js", count: 25, trending: false },
  { name: "CSS", count: 22, trending: false },
  { name: "HTML", count: 20, trending: false },
  { name: "Machine Learning", count: 18, trending: true },
  { name: "AWS", count: 16, trending: false },
  { name: "Docker", count: 14, trending: false },
  { name: "Kubernetes", count: 12, trending: false },
  { name: "Vue.js", count: 11, trending: false },
  { name: "Angular", count: 10, trending: false },
  { name: "GraphQL", count: 9, trending: false },
  { name: "MongoDB", count: 8, trending: false },
  { name: "PostgreSQL", count: 7, trending: false },
  { name: "Redis", count: 6, trending: false },
  { name: "Git", count: 5, trending: false },
  { name: "Linux", count: 4, trending: false },
  { name: "API Design", count: 3, trending: false },
]

export default function CategoriesPage() {
  const trendingCategories = categories.filter((cat) => cat.trending)
  const allCategories = categories

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
                Knowledge Hub
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Categories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover articles organized by topics that matter to you. From web development to AI, find expert insights
              in every field.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>All Categories</option>
                    <option>Trending</option>
                    <option>Most Articles</option>
                    <option>Most Followers</option>
                    <option>Beginner Friendly</option>
                  </select>
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-4 py-3 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white rounded-full bg-transparent"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">{categories.length}</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">Articles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400">Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-400">Expert Authors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold text-white">Trending Categories</h2>
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">🔥 Hot</Badge>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingCategories.map((category, index) => (
              <div key={category.id} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                  <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-2xl overflow-hidden h-full hover:bg-gray-800 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                            🔥 Trending
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                            {category.growth}
                          </Badge>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-3">{category.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Star className="w-4 h-4" />
                        <span>{category.difficulty}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {category.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-700/50">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span className="text-xl font-bold text-white">{category.articles}</span>
                          </div>
                          <div className="text-xs text-gray-400">Articles</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Users className="w-4 h-4 text-green-400" />
                            <span className="text-xl font-bold text-white">{category.followers}</span>
                          </div>
                          <div className="text-xs text-gray-400">Followers</div>
                        </div>
                      </div>

                      <Link
                        href={`/categories/${category.slug}`}
                        className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Explore Articles
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">All Categories</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCategories.map((category, index) => (
              <div key={category.id} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-300">
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-0 rounded-xl p-6 h-full hover:bg-gray-800/70 transition-all duration-300">
                    <div className="text-center space-y-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                        <div className="flex justify-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{category.articles}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{category.followers}</span>
                          </div>
                        </div>
                        {category.trending && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs mb-2">
                            🔥 {category.growth}
                          </Badge>
                        )}
                      </div>

                      <Link
                        href={`/categories/${category.slug}`}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group-hover:translate-x-1 duration-300"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Tags</h2>
            <p className="text-gray-300 text-lg">Discover content by specific technologies and topics</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <Link
                key={tag.name}
                href={`/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 transition-all duration-300 ${
                  tag.trending ? "border-orange-500/50 bg-orange-500/10" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  #{tag.name}
                  <Badge variant="secondary" className="bg-gray-700/50 text-gray-400 text-xs">
                    {tag.count}
                  </Badge>
                  {tag.trending && <span className="text-orange-400 text-xs">🔥</span>}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Suggest a new category or topic you'd like to see covered by our expert authors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <span className="flex items-center gap-2">
                Suggest a Topic
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
 