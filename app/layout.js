import './globals.css'

export const metadata = {
  title: 'Tuğba Nur Aslan — Portföy',
  description: 'Bilgisayar Mühendisliği öğrencisi, mobil uygulama geliştirici.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}