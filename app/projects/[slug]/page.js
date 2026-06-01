'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'

// Projelerin detaylı içerik kütüphanesi (İstediğin kadar teknik detay ekleyebilirsin)
const projeDetaylari = {
  'route-locked-tracking': {
    isim: 'Route-Locked Tracking (Rota Kilitli Takip Sistemi)',
    etiketler: ['FLUTTER', 'FIREBASE', 'MAPBOX', 'DART'],
    ozet: 'Bu proje; özellikle lider ve takipçi araçların konvoy veya acil müdahale ekipleri gibi koordineli hareket etmesi gereken senaryolarda gerçek zamanlı dinamik rota takibi ve canlı navigasyon sunan gelişmiş bir mobil uygulamadır.',
    teknikDetay: 'Uygulamanın frontend katmanı Flutter (Dart) ile çapraz platform mimarisine uygun geliştirilmiştir. Canlı konum takibi, veri akışı ve anlık durum senkronizasyonları Firebase Firestore altyapısıyla asenkron olarak yönetilmektedir. Harita servisleri, dinamik rota çizimleri ve özel rota kilitlenmeleri için Mapbox SDK entegrasyonu tamamlanmıştır. Ek olarak sürücü deneyimini artırmak adına Text-to-Speech (TTS) sesli yönlendirme modülü tasarlanmıştır.',
    mimari: 'Clean Architecture prensiplerine sadık kalınarak katmanlı mimari (Data, Domain, Presentation) kurgulanmıştır. State management çözümü olarak esnek ve test edilebilir bir yapı sunan Riverpod tercih edilmiştir.',
    github: 'https://github.com/tugbanuaslan7/mapbox'
  },
  'board-game-arsiv-sistemi': {
    isim: 'Board Game Arşiv Sistemi',
    etiketler: ['FLUTTER', 'HIVE', 'DART'],
    ozet: 'Kutu oyunları meraklılarının koleksiyonlarını dijital ortamda saklayabileceği, oynadıkları oyunları kaydedip puanlayabileceği yerli ve kapsamlı bir arşivleme platformudur.',
    teknikDetay: 'İnternet bağlantısının olmadığı senaryolarda bile kullanıcı verilerinin kaybolmaması amacıyla cihaz içi (local) NoSQL veritabanı çözümü olan Hive entegre edilmiştir. CRUD işlemleri ve arama optimizasyonları milisaniyeler seviyesinde çalışacak şekilde optimize edilmiştir.',
    mimari: 'Gereksiz render işlemlerinin önüne geçmek amacıyla hafif ve performans dostu bir state yönetimi kurgulanmıştır. Clean Code standartlarında, sürdürülebilir modüller halinde yazılmıştır.',
    github: 'https://github.com/tugbanuaslan7/BoardGameArchive'
  },
  'sirket-ici-yetki-onay-sistemi': {
    isim: 'Şirket İçi Yetki Onay Sistemi',
    etiketler: ['SPRING BOOT', 'JAVA', 'POSTGRESQL'],
    ozet: 'Büyük ölçekli kurumsal firmalarda departmanlar arası hiyerarşik izin, harcama ve yetki taleplerinin güvenli, şeffaf ve hızlı bir şekilde onay süreçlerinden geçmesini sağlayan backend tabanlı otomasyon sistemidir.',
    teknikDetay: 'Sistemin güçlü backend yapısı Java dili ve Spring Boot framework\'ü kullanılarak kurumsal standartlarda inşa edilmiştir. Veri bütünlüğünü sağlamak ve ilişkisel veri modellerini yönetmek amacıyla PostgreSQL veritabanı entegrasyonu yapılmıştır. Taleplerin durum değişiklikleri asenkron event tabanlı yapılarla güncellenmektedir.',
    mimari: 'RESTful API standartlarına tam uyumlu endpoint mimarisi kurulmuş olup, Spring Security modülüyle rol bazlı (RBAC) yetkilendirme ve güvenli kimlik doğrulama katmanı tasarlanmıştır.',
    github: 'https://github.com/tugbanuaslan7/approvalSystem'
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const currentSlug = params.slug

  const proje = projeDetaylari[currentSlug]

  if (!proje) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Proje Bulunamadı</h2>
        <Link href="/" style={{ color: '#000', marginTop: 20, display: 'inline-block' }}>Anasayfaya Dön</Link>
      </div>
    )
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#111', lineHeight: '1.7' }}>
      <div style={{ marginBottom: 40 }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>← Portföye Geri Dön</Link>
      </div>

      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#666', letterSpacing: '0.1em' }}>{proje.kategori}</span>
      <h1 style={{ fontSize: '32px', marginTop: '10px', marginBottom: '20px', lineHeight: '1.2', fontWeight: 'bold' }}>{proje.isim}</h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {proje.etiketler.map(tag => (
          <span key={tag} style={{ background: '#f5f5f5', padding: '4px 10px', fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em' }}>{tag}</span>
        ))}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '40px' }} />

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Proje Özeti</h3>
        <p style={{ color: '#333', fontSize: '16px' }}>{proje.ozet}</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Teknik Detaylar ve Geliştirme Süreci</h3>
        <p style={{ color: '#333', fontSize: '16px' }}>{proje.teknikDetay}</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Mimari ve State Management</h3>
        <p style={{ color: '#333', fontSize: '16px' }}>{proje.mimari}</p>
      </section>

      {proje.github && (
        <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <a href={proje.github} target="_blank" rel="noreferrer" 
             style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
            Kaynak Kodları GitHub'da İncele →
          </a>
        </div>
      )}
    </article>
  )
}