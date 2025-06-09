import { getBlogPosts } from '@/lib/blog_utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Method not allowed",
    })
  }

  const posts = getBlogPosts()
  
  const formattedPosts = posts.map(post => ({
    slug: post.slug,
    metadata: post.metadata,
  }))

  return res.status(200).json({
    message: "Successful",
    posts: formattedPosts
  })
}