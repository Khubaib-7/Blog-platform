import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Search, Filter, Star, TrendingUp, ArrowRight, Eye, Heart } from "lucide-react"

const authors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    bio: "Passionate about technology and storytelling, Sarah founded Blog Platform to create a space where knowledge meets creativity.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Technology", "Leadership", "Content Strategy"],
    articles: 45,
    followers: "12.5K",
    totalViews: "250K",
    joinDate: "2022-01-15",
    featured: true,
    verified: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Senior Developer & Tech Writer",
    bio: "Full-stack developer with 8+ years of experience. Mike translates complex technical concepts into accessible content.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Web Development", "JavaScript", "Cloud Computing"],
    articles: 32,
    followers: "8.2K",
    totalViews: "180K",
    joinDate: "2022-03-20",
    featured: false,
    verified: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer & Design Writer",
    bio: "Award-winning designer who believes great design should be accessible to everyone. Emily shares design insights and trends.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["UI/UX Design", "Design Systems", "User Research"],
    articles: 28,
    followers: "9.8K",
    totalViews: "165K",
    joinDate: "2022-02-10",
    featured: false,
    verified: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Security Expert & Analyst",
    bio: "Cybersecurity specialist with expertise in cloud security and data protection. David keeps our readers informed about digital safety.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Cybersecurity", "Cloud Security", "Data Privacy"],
    articles: 21,
    followers: "6.4K",
    totalViews: "120K",
    joinDate: "2022-04-05",
    featured: false,
    verified: true,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "AI & Machine Learning Specialist",
    bio: "PhD in Computer Science with focus on AI/ML. Lisa makes artificial intelligence concepts accessible to everyone.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    articles: 19,
    followers: "11.2K",
    totalViews: "195K",
    joinDate: "2022-05-12",
    featured: true,
    verified: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Tom Anderson",
    role: "Frontend Developer & CSS Expert",
    bio: "CSS wizard and frontend enthusiast. Tom creates beautiful, accessible web experiences and shares his knowledge.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Frontend Development", "CSS", "Web Accessibility"],
    articles: 24,
    followers: "7.1K",
    totalViews: "140K",
    joinDate: "2022-06-18",
    featured: false,
    verified: false,
    rating: 4.5,
  },
]

const filterOptions = ["All Authors", "Featured", "Most Articles", "Most Followers", "Newest", "Verified"]

export default function AuthorsPage() {
  const featuredAuthors = authors.filter((author) => author.featured)
  const regularAuthors = authors.filter((author) => !author.featured)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <User className="w-6 h-6 text-purple-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-semibold tracking-wider uppercase">
                Expert Writers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Authors
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the passionate writers, experts, and thought leaders who bring you insights, tutorials, and
              stories that matter.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search authors..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {filterOptions.map((option) => (
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
                    Filter
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">{authors.length}+</div>
                <div className="text-gray-400">Expert Authors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">Articles Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400">Total Followers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      {featuredAuthors.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Star className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Featured Authors</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {featuredAuthors.map((author) => (
                <div key={author.id} className="group">
                  <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                    <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-3xl overflow-hidden h-full">
                      <div className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="relative">
                            <Image
                              src={author.image || "/placeholder.svg"}
                              alt={author.name}
                              width={120}
                              height={120}
                              className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-2xl"
                            />
                            <div className="absolute -top-2 -right-2 flex gap-1">
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                                ⭐ Featured
                              </Badge>
                              {author.verified && (
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                                  ✓
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-2xl font-bold text-white">{author.name}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-300">{author.rating}</span>
                              </div>
                            </div>
                            <p className="text-purple-300 font-medium mb-3">{author.role}</p>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{author.bio}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {author.expertise.slice(0, 3).map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-gray-700/50 text-gray-300">
                                  {skill}
                                </Badge>
                              ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-xl font-bold text-white">{author.articles}</div>
                                <div className="text-xs text-gray-400">Articles</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold text-white">{author.followers}</div>
                                <div className="text-xs text-gray-400">Followers</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold text-white">{author.totalViews}</div>
                                <div className="text-xs text-gray-400">Views</div>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Link
                                href={`/authors/${author.id}`}
                                className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                              >
                                View Profile
                              </Link>
                              <Button
                                variant="outline"
                                size="sm"
                                className="px-4 py-3 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white bg-transparent rounded-full"
                              >
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Authors */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">All Authors</h2>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Most Articles</option>
                <option>Most Followers</option>
                <option>Most Views</option>
                <option>Highest Rated</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularAuthors.map((author, index) => (
              <div key={author.id} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-600/50 hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 transition-all duration-300">
                  <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-2xl overflow-hidden h-full hover:bg-gray-800 transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="relative mx-auto mb-4">
                        <Image
                          src={author.image || "/placeholder.svg"}
                          alt={author.name}
                          width={100}
                          height={100}
                          className="w-20 h-20 object-cover rounded-2xl mx-auto"
                        />
                        {author.verified && (
                          <div className="absolute -top-1 -right-1">
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs p-1">
                              ✓
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{author.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-300">{author.rating}</span>
                        </div>
                      </div>
                      <p className="text-purple-300 font-medium text-sm">{author.role}</p>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{author.bio}</p>

                      <div className="flex flex-wrap gap-1">
                        {author.expertise.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center py-3 border-t border-gray-700/50">
                        <div>
                          <div className="text-lg font-bold text-white">{author.articles}</div>
                          <div className="text-xs text-gray-400">Articles</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{author.followers}</div>
                          <div className="text-xs text-gray-400">Followers</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center gap-1">
                            <Eye className="w-3 h-3 text-gray-400" />
                            <span className="text-sm font-bold text-white">{author.totalViews}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/authors/${author.id}`}
                          className="flex-1 text-center px-4 py-2 bg-gray-700/50 text-white font-medium rounded-lg hover:bg-purple-600 transition-all duration-300"
                        >
                          View Profile
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-3 py-2 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white bg-transparent rounded-lg"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
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
              Load More Authors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Become an Author?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of expert writers and share your knowledge with thousands of readers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <span className="flex items-center gap-2">
                Apply to Write
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
