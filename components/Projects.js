// Projeleri buradan düzenle
const projeler = [
  {
    wide: true,
    kategori: 'GPS MOBİL UYGULAMA',
    isim: 'Dinamik Rota Takipli Navigasyon',
    aciklama: 'Lider ve takipçi mimarisi üzerine gerçek zamanlı rota ve takipçi navigasyonu sağlayan Flutter uygulaması. Firebase Firestore ile anlık senkronizasyon ve TTS sesli yönlendirme.',
    etiketler: ['FLUTTER', 'FIREBASE', 'MAPBOX'],
    bg: '#111',
    github: 'https://github.com/kullanici-adin/kinetic',
  },
  {
    wide: false,
    kategori: 'FLUTTER MOBİL OYUN',
    isim: 'Board Game Arşiv Sistemi',
    aciklama: 'Kutu oyunlarını yönetmek için yerli ve kapsamlı bir platform.',
    etiketler: ['FLUTTER', 'HIVE'],
    bg: '#1a1a1a',
    github: '',
  },
  {
    wide: false,
    kategori: 'KURUMSAL MOBİL UYGULAMA',
    isim: 'Şirket İçi Yetki Onay Sistemi',
    aciklama: 'Onay akışlarını dijitalleştiren kurumsal mobil uygulama.',
    etiketler: ['ANDROID', 'JAVA'],
    bg: '#f0f0f0',
    github: '',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projeler">
      <div className="section-header">
        <span className="section-title">PROJELER</span>
      </div>
      <div className="projects-grid">
        {projeler.map((p, i) => (
          <div className={`project-card${p.wide ? ' wide' : ''}`} key={i}>
            <div className="project-info">
              <div className="project-category">{p.kategori}</div>
              <div className="project-name">{p.isim}</div>
              <p className="project-desc">{p.aciklama}</p>
              <div className="tags">
                {p.etiketler.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ display:'inline-block', marginTop:14, fontSize:11, fontFamily:'sans-serif', letterSpacing:'0.06em', borderBottom:'1px solid #e0e0e0', paddingBottom:2 }}>
                  GitHub →
                </a>
              )}
            </div>
            <div className="project-img" style={{ background: p.bg }} />
          </div>
        ))}
      </div>
    </section>
  )
}
