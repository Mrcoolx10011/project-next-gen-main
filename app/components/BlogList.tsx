"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, Clock, Tag } from "lucide-react"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "Explore the upcoming trends and technologies that will shape the web development landscape in 2024.",
    category: "Technology",
    author: "John Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://picsum.photos/800/400?random=1",
    tags: ["Web Development", "Technology Trends", "Future Tech"],
  },
  {
    id: 2,
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components",
    excerpt: "A comprehensive guide to understanding and implementing React Server Components in your applications.",
    category: "Development",
    author: "Sarah Johnson",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "https://picsum.photos/800/400?random=2",
    tags: ["React", "Server Components", "Web Development"],
  },
  {
    id: 3,
    slug: "ui-ux-design-principles",
    title: "UI/UX Design Principles for Better User Experience",
    excerpt:
      "Learn the fundamental principles of UI/UX design that can significantly improve your application's user experience.",
    category: "Design",
    author: "Mike Wilson",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://picsum.photos/800/400?random=3",
    tags: ["UI/UX", "Design", "User Experience"],
  },
]

const categories = ["All", "Technology", "Development", "Design", "Business", "Tutorial"]

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, tutorials, and news from our team of experts.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 text-sm px-3 py-1 bg-secondary text-primary rounded-full"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

