"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-800/80 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-4">About This Blog</h1>
        <p className="text-gray-300 text-lg mb-4">
          Welcome to our modern blog platform! This site is built with Next.js and Express, designed for sharing insights, tutorials, and stories with a focus on performance, accessibility, and beautiful design.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          Our mission is to empower writers and readers with a seamless, fast, and enjoyable experience. Whether you are here to learn, share, or explore, we hope you find value in our content and community.
        </p>
        <p className="text-gray-400 text-sm mt-8">&copy; {new Date().getFullYear()} Blog Platform. All rights reserved.</p>
      </div>
    </div>
  )
} 