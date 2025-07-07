"use client"

import { useEffect, useState } from "react"
import { fetchAllPosts } from "@/lib/utils"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ArticlesPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchAllPosts()
      .then(setPosts)
      .catch(() => setError("Failed to load articles."))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-400 text-2xl">{error}</div>

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">All Articles</h1>
        <div className="grid gap-8">
          {posts.map(post => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:bg-gray-800 transition-all">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300 mb-2">{post.category}</Badge>
              <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-2">By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 