import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog_utils"
import Image from "next/image"

export default function BlogsPage() {
  const blogs = getBlogPosts()

  return (
    <section id="blog" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Latest Blogs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and updates from our research and development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.metadata.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image 
                  width="300"
                  height="200"
                  src={blog.metadata.image!} 
                  alt={blog.metadata.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.metadata.date}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                  {blog.metadata.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {blog.metadata.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blogs/${blog.metadata.id}`} aria-label="Read blog">
                  <Button variant="outline" className="w-full group" aria-label="Read blog">
                    Read Blog
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}