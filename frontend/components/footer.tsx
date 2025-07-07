import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, BookOpen, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-gray-900 to-blue-900/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Blog Platform
                </h2>
                <p className="text-sm text-gray-400">Discover & Share</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your premier destination for discovering amazing insights, stories, and knowledge from passionate writers
              and industry experts around the world.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "Latest Articles", href: "/articles" },
                { name: "Popular Posts", href: "/popular" },
                { name: "Categories", href: "/categories" },
                { name: "Authors", href: "/authors" },
                { name: "Newsletter", href: "/newsletter" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Categories</h3>
            <ul className="space-y-3">
              {[
                { name: "Technology", href: "/category/technology" },
                { name: "Development", href: "/category/development" },
                { name: "Design", href: "/category/design" },
                { name: "Security", href: "/category/security" },
                { name: "Blogging", href: "/category/blogging" },
              ].map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center sm:text-left">
            © 2024 Blog Platform. Crafted with <Heart className="w-4 h-4 inline text-red-400 mx-1" />
            for knowledge sharing.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
