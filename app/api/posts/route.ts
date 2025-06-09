import { getBlogPosts } from "@/lib/blog_utils"

export async function GET() {
  const posts = getBlogPosts()
  
  return Response.json(posts.map(post => ({
    slug: post.slug,
    metadata: post.metadata,
  })))
}