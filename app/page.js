import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-text">© 2025 Tuğba Nur Aslan — Tüm hakları saklıdır.</span>
        <span className="footer-text" style={{ fontFamily: 'Courier New, monospace' }}>v1.0</span>
      </footer>
    </>
  )
}
