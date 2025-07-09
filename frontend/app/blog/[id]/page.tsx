import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CalendarDays,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  Eye,
  MessageCircle,
  Star,
  ThumbsUp,
} from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Successful Blogging",
    excerpt:
      "Learn how to create engaging blog content that drives traffic and builds your audience with these proven strategies.",
    content: `
      <p>Creating successful blog content requires a strategic approach that combines valuable insights with engaging presentation. In this comprehensive guide, we'll explore the essential tips that will help you build a thriving blog that resonates with your audience.</p>

      <h2>1. Know Your Audience</h2>
      <p>Understanding your target audience is the foundation of successful blogging. Research their interests, pain points, and preferred content formats to create content that truly resonates.</p>

      <h2>2. Create Compelling Headlines</h2>
      <p>Your headline is the first thing readers see. Make it count by crafting headlines that are clear, compelling, and promise value to your readers.</p>

      <h2>3. Focus on Quality Over Quantity</h2>
      <p>It's better to publish one high-quality post per week than seven mediocre ones. Focus on creating content that provides real value to your readers.</p>

      <h2>4. Use Visual Elements</h2>
      <p>Break up your text with images, infographics, and videos. Visual content not only makes your posts more engaging but also helps with SEO.</p>

      <h2>5. Optimize for SEO</h2>
      <p>Research keywords, optimize your meta descriptions, and use proper heading structures to help your content rank better in search engines.</p>

      <h2>Conclusion</h2>
      <p>Successful blogging is a marathon, not a sprint. By following these tips and consistently creating valuable content, you'll build an engaged audience that keeps coming back for more.</p>
    `,
    author: "John Doe",
    authorId: 1,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blogging",
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    views: "2.5K",
    likes: 124,
    comments: 18,
    shares: 45,
    bookmarks: 67,
    rating: 4.8,
    tags: ["Blogging", "Content Strategy", "SEO"],
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "The Next Generation Social AI App",
    excerpt: "Discover how artificial intelligence is revolutionizing social media platforms and user interactions.",
    content: `
      <p>Artificial intelligence is transforming the social media landscape, creating more personalized and engaging experiences for users worldwide. This revolution is reshaping how we connect, share, and interact online.</p>

      <h2>The AI Revolution in Social Media</h2>
      <p>Modern social platforms are leveraging AI to understand user behavior, preferences, and content consumption patterns like never before.</p>

      <h2>Key Features of AI-Powered Social Apps</h2>
      <p>From intelligent content curation to automated moderation, AI is enhancing every aspect of social media platforms.</p>
    `,
    author: "Sarah Johnson",
    authorId: 2,
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    views: "1.8K",
    likes: 89,
    comments: 12,
    shares: 23,
    bookmarks: 34,
    rating: 4.6,
    tags: ["AI", "Social Media", "Technology"],
    difficulty: "Intermediate",
  },
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/" className="text-orange-400 hover:text-orange-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Articles
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {post.category}
            </Badge>
              <Badge
                className={`border-0 text-white ${
                  post.difficulty === "Beginner"
                    ? "bg-green-500"
                    : post.difficulty === "Intermediate"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
              >
                {post.difficulty}
              </Badge>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">⭐ Featured</Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{post.author}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{post.rating}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white"
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like ({post.likes})
              </Button>
                <Button
                  variant="outline"
                  size="sm"
                className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                Share ({post.shares})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                Save ({post.bookmarks})
                </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="prose prose-lg prose-invert max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:text-gray-300 prose-li:mb-2
            prose-strong:text-white
            prose-code:bg-gray-800 prose-code:text-purple-300 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-purple-500 hover:text-white transition-all duration-300 text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gray-800/30 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">About {post.author}</h3>
              <p className="text-gray-300 mb-4">
                Passionate writer and expert in {post.category.toLowerCase()}. Follow for more insights and tutorials.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={`/authors/${post.authorId}`}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  View Profile
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="bg-gray-800/30 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                >
                  <Link
                    href={`/blog/${relatedPost.id}`}
                  className="block bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                  >
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {relatedPost.category}
                    </Badge>
                    <Badge
                      className={`border-0 text-white text-xs ${
                        relatedPost.difficulty === "Beginner"
                          ? "bg-green-500"
                          : relatedPost.difficulty === "Intermediate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    >
                      {relatedPost.difficulty}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-3">
                      <span>{relatedPost.author}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{relatedPost.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{relatedPost.rating}</span>
                      </div>
                    </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
