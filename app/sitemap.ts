import { getBlogPosts } from "@/lib/blog_utils"

export default async function sitemap() {

  const site = 'https://tech-atriocare.netlify.app'
//   TODO
//   const site = 'https://techatriocare.com'

  const posts = getBlogPosts()
  
  const postUrls = posts.map((post) => ({
    url: `${site}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date!),
  }))

  return [
    {
      url: site,
      lastModified: new Date(),
      priority: 1,
    },
    ...postUrls,
  ]
}