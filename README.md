# Portföy & Blog Sitesi

Next.js 14 (App Router) ile yapılmış kişisel portföy ve blog sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresi açılır.

## Yapı

```
portfolio/
├── app/
│   ├── layout.js          # Genel sayfa yapısı
│   ├── page.js            # Ana sayfa
│   ├── globals.css        # Tüm stiller
│   └── blog/
│       ├── page.js        # Tüm yazılar
│       └── [slug]/page.js # Yazı detayı
├── components/            # Her bölüm ayrı component
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Education.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── BlogPreview.js
│   └── Contact.js
├── content/
│   └── posts/             # Blog yazıları (.mdx)
└── lib/
    └── posts.js           # Blog yardımcı fonksiyonları
```

## Kişiselleştirme

### Bilgilerini güncelle
- **Hero:** `components/Hero.js` → isim, bio, linkler
- **Eğitim:** `components/Education.js` → egitimler dizisi
- **Deneyim:** `components/Experience.js` → deneyimler dizisi
- **Projeler:** `components/Projects.js` → projeler dizisi
- **İletişim:** `components/Contact.js` → email, lokasyon, sosyal medya

### Fotoğraf ekle
`public/photo.jpg` olarak kaydet, sonra `components/Hero.js` içindeki yorum satırını aç.

### Yeni blog yazısı
`content/posts/yazi-basligi.mdx` dosyası oluştur:

```mdx
---
title: "Yazı Başlığı"
date: "15 MART 2025"
rawDate: "2025-03-15"
excerpt: "Kısa özet buraya gelir."
category: "KATEGORİ"
coverBg: "#111"
---

Yazı içeriği buraya...
```

## Deploy (Vercel)

1. GitHub'a push et
2. [vercel.com](https://vercel.com) → New Project → GitHub repo'nu seç
3. Deploy'a bas — otomatik yayınlanır

### Domain bağlama
Vercel dashboard → Settings → Domains → `alanadin.com` ekle  
Namecheap'te DNS → A kaydı: `76.76.21.21`
