"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Star, TrendingUp, BookOpen, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchPosts } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const stats = [
  { icon: BookOpen, label: "Articles Published", value: "500+" },
  { icon: Users, label: "Active Readers", value: "50K+" },
  { icon: TrendingUp, label: "Monthly Views", value: "1M+" },
  { icon: Zap, label: "Expert Authors", value: "25+" },
]

function getExcerpt(post: any) {
  if (post.excerpt && post.excerpt.length > 0) return post.excerpt;
  if (post.content && typeof post.content === 'string') {
    const plain = post.content.replace(/<[^>]+>/g, ''); // Remove HTML tags if any
    return plain.length > 150 ? plain.slice(0, 150) + '...' : plain;
  }
  return '';
}

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(() => setError("Failed to load posts."))
      .finally(() => setLoading(false))
  }, [])

  // Filter posts by search query (case-insensitive)
  let filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )
  // Sort posts by selected order (newest or oldest first)
  filteredPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })

  // Get the featured post (if any)
  const featuredPost = filteredPosts.find((post) => post.featured)
  // Get all regular (non-featured) posts
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Loading...</div>
  }
  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-400 text-2xl">{error}</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Content */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="relative">
                <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 w-6 h-6 bg-yellow-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm font-semibold tracking-wider uppercase">
                Latest Insights
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Discover Amazing</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                Insights & Stories
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Dive into a world of knowledge with our curated collection of articles, tutorials, and insights from
              industry experts and thought leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="#featured"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Articles
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-sm">→</span>
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-400/10"
              >
                Learn More
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative group" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div id="featured" className="max-w-6xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12 hover:border-purple-500/50 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30 px-4 py-2"
                        >
                          ✨ Featured
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 px-3 py-1">
                          {featuredPost.category}
                        </Badge>
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-lg text-gray-300 leading-relaxed">{getExcerpt(featuredPost)}</p>

                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white font-medium">{featuredPost.author}</span>
                        </div>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                        <span>•</span>
                        <span>{featuredPost.views} views</span>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
                      >
                        Read Full Story
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">→</span>
                        </div>
                      </Link>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <Image
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          width={600}
                          height={400}
                          className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-gray-400 text-lg">Discover insights from our community of writers</p>
            </div>
            <div className="flex items-center gap-4 mt-6 sm:mt-0">
              <Input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by title..."
                className="bg-gray-800/50 text-white border border-gray-700 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="bg-gray-800/50 text-white border border-gray-700 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                aria-label="Sort posts by date"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {regularPosts.length === 0 ? (
            <div className="text-center text-gray-400 text-xl py-16">No results found.</div>
          ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div key={post.id} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Card className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden h-full hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-gray-900/80 backdrop-blur-sm text-gray-300 border-0">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-300 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      {post.views} views
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                      <p className="text-gray-300 line-clamp-3 leading-relaxed">{getExcerpt(post)}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{post.readTime}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 flex items-center gap-1 group/link"
                      >
                        Read More
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              View All Articles
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of readers and get the latest insights, tutorials, and stories delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  Subscribe Now
                </button>
              </div>

              <p className="text-sm text-gray-400">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
