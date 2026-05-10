import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export function getPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(raw)
      return { slug, ...data }
    })
    .sort((a, b) => new Date(b.rawDate || 0) - new Date(a.rawDate || 0))
}

export function getPost(slug) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf-8')
  const { data, content } = matter(raw)
  return { slug, meta: data, content }
}
