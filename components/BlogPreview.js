import Link from 'next/link'
import { getPosts } from '@/lib/posts'

export default function BlogPreview() {
  const posts = getPosts().slice(0, 3)

  return (
    <section className="section" id="blog">
      <div className="section-header">
        <span className="section-title">GÜNCEL YAZILAR</span>
        <Link href="/blog" className="section-more">TÜMÜNÜ GÖR →</Link>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration:'none', color:'inherit' }}>
            <article className="blog-card">
              <div className="blog-thumb" style={{ background: post.coverBg || '#222' }}>
                {/* Kapak görseli varsa: <img src={post.cover} alt="" style={{ width:'100%',height:'100%',objectFit:'cover' }} /> */}
              </div>
              <div className="blog-date">{post.date}</div>
              <div className="blog-title">{post.title}</div>
              <p className="blog-excerpt">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
