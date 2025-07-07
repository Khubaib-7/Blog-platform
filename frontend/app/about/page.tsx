import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, Target, Heart, Zap, ArrowRight, Star, Globe, Shield } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    bio: "Passionate about technology and storytelling, Sarah founded Blog Platform to create a space where knowledge meets creativity.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Technology", "Leadership", "Content Strategy"],
    articles: 45,
    experience: "8+ years",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Senior Developer & Tech Writer",
    bio: "Full-stack developer with 8+ years of experience. Mike translates complex technical concepts into accessible content.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Web Development", "JavaScript", "Cloud Computing"],
    articles: 32,
    experience: "10+ years",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer & Design Writer",
    bio: "Award-winning designer who believes great design should be accessible to everyone. Emily shares design insights and trends.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["UI/UX Design", "Design Systems", "User Research"],
    articles: 28,
    experience: "6+ years",
    social: { twitter: "#", linkedin: "#", dribbble: "#" },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Security Expert & Analyst",
    bio: "Cybersecurity specialist with expertise in cloud security and data protection. David keeps our readers informed about digital safety.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Cybersecurity", "Cloud Security", "Data Privacy"],
    articles: 21,
    experience: "12+ years",
    social: { twitter: "#", linkedin: "#", medium: "#" },
  },
]

const values = [
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description:
      "We believe knowledge should be accessible to everyone. Our platform democratizes learning and expertise sharing.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community where writers and readers can connect, learn, and grow together.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Quality Content",
    description: "We maintain high editorial standards to ensure every article provides genuine value to our readers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Staying ahead of trends and emerging technologies to bring you the most relevant and timely content.",
    color: "from-orange-500 to-red-500",
  },
]

const achievements = [
  { icon: Globe, label: "Global Reach", value: "150+ Countries", description: "Readers from around the world" },
  { icon: Star, label: "Quality Rating", value: "4.9/5", description: "Average reader satisfaction" },
  { icon: Shield, label: "Trust Score", value: "99.8%", description: "Content accuracy rate" },
  { icon: Zap, label: "Response Time", value: "<24h", description: "Average support response" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Heart className="w-6 h-6 text-red-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Blog Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're on a mission to democratize knowledge sharing and create a platform where passionate writers and
              curious readers come together to explore, learn, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/articles"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Explore Articles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href="/authors"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300"
              >
                Meet Our Authors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At Blog Platform, we believe that everyone has valuable insights to share. Our mission is to create a
                space where knowledge flows freely, where complex topics become accessible, and where learning never
                stops.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We're building more than just a blog platform – we're cultivating a community of lifelong learners,
                innovative thinkers, and passionate storytellers who are shaping the future through shared knowledge.
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.label} className="text-center p-4 bg-gray-800/30 rounded-xl">
                    <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                    <div className="text-sm text-gray-400">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Mission"
                width={600}
                height={500}
                className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape the community we're building together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Card className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The passionate individuals behind Blog Platform who work tirelessly to bring you quality content and
              insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-600/50 hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 transition-all duration-300">
                  <Card className="bg-gray-800/90 backdrop-blur-sm border-0 rounded-2xl overflow-hidden h-full">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gray-900/80 backdrop-blur-sm text-gray-300 border-0 text-xs">
                          {member.experience}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-purple-300 font-medium">{member.role}</p>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>

                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">{member.articles}</p>
                          <p className="text-xs text-gray-400">Articles</p>
                        </div>
                        <Link
                          href={`/authors/${member.id}`}
                          className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 flex items-center gap-1 group/link"
                        >
                          View Profile
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg">Key milestones in our growth and evolution</p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2022",
                title: "Platform Launch",
                description: "Started with a vision to democratize knowledge sharing",
              },
              {
                year: "2023",
                title: "Community Growth",
                description: "Reached 10,000 active readers and 50 published articles",
              },
              {
                year: "2024",
                title: "Global Expansion",
                description: "Expanded to serve readers in 150+ countries worldwide",
              },
              {
                year: "Future",
                title: "Innovation Continues",
                description: "Building AI-powered features and enhanced user experience",
              },
            ].map((milestone, index) => (
              <div key={milestone.year} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-purple-400">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to be part of something bigger? Join thousands of readers and writers who are shaping the future of
            knowledge sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Subscribe to Newsletter
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 bg-transparent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
