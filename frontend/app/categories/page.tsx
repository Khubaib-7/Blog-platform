"use client"

const categories = [
  { name: "Technology", description: "Latest trends and tutorials in tech." },
  { name: "Design", description: "UI/UX, creativity, and inspiration." },
  { name: "Productivity", description: "Tips and tools to get more done." },
  { name: "Personal Growth", description: "Stories and advice for self-improvement." },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-800/80 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-8">Categories</h1>
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-900/80 rounded-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-purple-400 mb-2">{cat.name}</h2>
              <p className="text-gray-300">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 