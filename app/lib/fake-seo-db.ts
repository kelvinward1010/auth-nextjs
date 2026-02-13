export const fakePosts = [
  {
    slug: 'nextjs-seo',
    title: 'Next.js SEO Guide',
    summary: 'Learn how to optimize SEO in Next.js',
    ogImage: '/og/nextjs-seo.png',
  },
  {
    slug: 'auth-architecture',
    title: 'Auth Architecture in Next.js',
    summary: 'Production auth structure explained',
    ogImage: '/og/auth.png',
  },
]

export async function getPost(slug: string) {
  await new Promise(r => setTimeout(r, 300)) // fake latency
  return fakePosts.find(p => p.slug === slug)
}