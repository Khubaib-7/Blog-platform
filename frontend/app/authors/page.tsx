"use client"

const authors = [
  { name: "Jane Doe", bio: "Tech writer and JavaScript enthusiast.", avatar: "/placeholder-user.jpg" },
  { name: "John Smith", bio: "Full-stack developer and blogger.", avatar: "/placeholder-user.jpg" },
  { name: "Alex Lee", bio: "UI/UX designer and accessibility advocate.", avatar: "/placeholder-user.jpg" },
]

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-gray-800/80 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-8">Meet the Authors</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {authors.map((author, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-900/80 rounded-xl p-6 border border-gray-700">
              <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full mb-4 border-2 border-purple-500" />
              <h2 className="text-xl font-semibold text-white mb-2">{author.name}</h2>
              <p className="text-gray-400 text-center">{author.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 