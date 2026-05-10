'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">TUĞBA NUR ASLAN</Link>
      <ul className="nav-links">
        <li><Link href="#egitim">EĞİTİM</Link></li>
        <li><Link href="#deneyim">DENEYİM</Link></li>
        <li><Link href="#projeler">PROJELER</Link></li>
        <li><Link href="/blog">BLOG</Link></li>
        <li><Link href="#iletisim">İLETİŞİM</Link></li>
      </ul>
      <a href="/cv.pdf" target="_blank" className="nav-btn">CV İndir →</a>
    </nav>
  )
}
