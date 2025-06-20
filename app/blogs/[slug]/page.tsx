import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog_utils"

interface BlogPageProps {
  params: Promise<{ 
    slug: string 
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPageProps) {
  const posts = await getBlogPosts()
  const resolvedParams = await params
  const post = posts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: post.metadata.image ? [post.metadata.image] : [],
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const posts = await getBlogPosts()
  const resolvedParams = await params
  const post = posts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#blog" aria-label="Back to Blogs">
            <Button variant="ghost" className="mb-6 text-gray-100" aria-label="Back to Blogs">
              <ArrowLeft className="h-4 w-4 mr-2 text-gray-100" />
              Back to Blogs
            </Button>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="h-4 w-4 mr-2" />
              {post.metadata.date}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
              {post.metadata.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.metadata.image && post.metadata.image != 'null' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t">
        <div className="flex justify-between items-center">
          <Link href="/#blog" aria-label="Back to All Blogs">
            <Button variant="outline" aria-label="Back to All Blogs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}