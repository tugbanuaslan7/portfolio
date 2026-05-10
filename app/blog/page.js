import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getPosts } from '@/lib/posts'

export const metadata = { title: 'Blog — Tuğba Nur Aslan' }

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      <Navbar />
      <main className="section" style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="section-header">
          <span className="section-title">TÜM YAZILAR</span>
          <Link href="/" className="section-more">← ANA SAYFA</Link>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration:'none', color:'inherit' }}>
              <article className="blog-card">
                <div className="blog-thumb" style={{ background: post.coverBg || '#222' }} />
                <div className="blog-date">{post.date}</div>
                <div className="blog-title">{post.title}</div>
                <p className="blog-excerpt">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
