"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchPostById, fetchAllPosts } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<any>(null)
  const [related, setRelated] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch the current post and related posts on mount or when ID changes
  useEffect(() => {
    fetchPostById(params.id)
      .then((data) => setPost(data))
      .catch(() => setError("Failed to load post."))
      .finally(() => setLoading(false))
    fetchAllPosts()
      .then((all) => setRelated(all.filter((p: any) => String(p.id) !== String(params.id)).slice(0, 2)))
      .catch(() => {})
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">Loading...</div>
    )
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-2xl">{error}</div>
    )
  }
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>

          <div className="mb-8">
            <Badge variant="secondary" className="bg-gray-700 text-gray-300 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>

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

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                  aria-label="Bookmark"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
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
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="bg-gray-800/30 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Insights</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                >
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="block bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300 mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-white hover:text-purple-300 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{relatedPost.author}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
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
