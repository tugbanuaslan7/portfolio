import Navbar from '@/components/Navbar'
import { getPost, getPosts } from '@/lib/posts'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { meta } = getPost(params.slug)
  return { title: `${meta.title} — Tuğba Nur Aslan` }
}

export default function PostPage({ params }) {
  const { meta, content } = getPost(params.slug)

  return (
    <>
      <Navbar />
      <main>
        <article className="blog-page">
          <Link href="/blog" className="section-more" style={{ display:'inline-block', marginBottom:32 }}>← Tüm Yazılar</Link>
          <h1>{meta.title}</h1>
          <div className="blog-page-meta">{meta.date} &nbsp;·&nbsp; {meta.category}</div>
          <div className="blog-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  )
}