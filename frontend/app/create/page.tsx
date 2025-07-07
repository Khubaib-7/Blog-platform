"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (title.length < 5 || content.length < 1 || author.length < 1) {
      setError("All fields are required. Title must be at least 5 characters.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, author })
      })
      if (!res.ok) throw new Error("Failed to create post.")
      setSuccess("Post created! Redirecting...")
      setTimeout(() => router.push("/"), 1200)
    } catch {
      setError("Failed to create post. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800/80 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700"
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Create a New Post</h1>
        <div>
          <label className="block text-gray-300 mb-2">Title</label>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="bg-gray-900 text-white border-gray-700 focus:border-purple-500"
            required
            minLength={5}
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Content</label>
          <Textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Write your post content..."
            className="bg-gray-900 text-white border-gray-700 focus:border-purple-500 min-h-[120px]"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Author</label>
          <Input
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Your name"
            className="bg-gray-900 text-white border-gray-700 focus:border-purple-500"
            required
          />
        </div>
        {error && <div className="text-red-400 text-center" aria-live="polite">{error}</div>}
        {success && <div className="text-green-400 text-center" aria-live="polite">{success}</div>}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full py-3 mt-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Post"}
        </Button>
      </form>
    </div>
  )
} 