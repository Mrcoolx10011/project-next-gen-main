import { Suspense } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import LoadingSpinner from "../../components/LoadingScreen"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development: What to Expect in 2024",
    content: `
      <p>As we approach 2024, the landscape of web development continues to evolve at a rapid pace. Emerging technologies, changing user expectations, and new design paradigms are shaping the future of how we build and interact with websites and web applications.</p>

      <h2>1. AI-Driven Development</h2>
      <p>Artificial Intelligence is set to play a more significant role in web development. From AI-assisted coding to intelligent debugging tools, developers will have powerful allies in creating more efficient and error-free code. We may also see the rise of AI-powered design tools that can generate layouts and color schemes based on simple prompts.</p>

      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) is poised to become more prevalent, allowing developers to run high-performance applications in web browsers. This technology opens up possibilities for more complex web applications, including games, video editing tools, and even desktop-grade software running in browsers.</p>

      <h2>3. Progressive Web Apps (PWAs) Evolution</h2>
      <p>PWAs will continue to blur the line between web and native applications. With improved offline capabilities, push notifications, and app-like interfaces, PWAs are set to provide users with seamless experiences across all devices.</p>

      <h2>4. Serverless Architectures</h2>
      <p>The serverless trend is expected to grow, with more developers opting for serverless functions and backends. This approach allows for better scalability, reduced operational costs, and faster development cycles.</p>

      <h2>5. Enhanced Focus on Accessibility</h2>
      <p>Web accessibility will become a primary concern rather than an afterthought. We'll see more tools and frameworks that make it easier to create accessible websites from the ground up, ensuring digital experiences are inclusive for all users.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of potential. By staying informed about these trends and continuously adapting our skills, we can create more powerful, efficient, and inclusive web experiences for users around the world.</p>
    `,
    excerpt: "Explore the upcoming trends and technologies that will shape the web development landscape in 2024.",
    category: "Technology",
    author: "John Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://picsum.photos/800/400?random=1",
    tags: ["Web Development", "Technology Trends", "Future Tech"],
  },
  // Add more blog posts here...
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Suspense fallback={<LoadingSpinner />}>
        <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" priority />
          </div>
          <div className="p-6 md:p-8">
            <Link href="/blog" className="flex items-center text-blue-600 mb-4 hover:underline">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 mb-6">
              <span className="flex items-center mr-4 mb-2">
                <Calendar size={16} className="mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </span>
              <span className="mr-4 mb-2">By {post.author}</span>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Suspense>
    </div>
  )
}

