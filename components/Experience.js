// Deneyim bilgilerini buradan düzenle
const deneyimler = [
  {
    baslik: 'Stajyer — Bilgi Teknolojileri',
    donem: 'TEMMUZ – AĞUSTOS 2024',
    gorevler: [
      'Üretim sürecine uygun API entegrasyonu ve test süreçlerini yürüttüm.',
      'Veri tabanı optimizasyonu ve sorgulama süreçlerinde aktif rol üstlendim.',
      'API dokümantasyonu ve proje geliştirme sürecine katkı sağladım.',
    ],
    teknolojiler: ['SQL', 'BT', 'PYTHON'],
  },
  // Yeni deneyim eklemek için buraya kopyala ↑
]

export default function Experience() {
  return (
    <section className="section" id="deneyim">
      <div className="section-header">
        <span className="section-title">DENEYİM</span>
      </div>
      {deneyimler.map((d, i) => (
        <div className="exp-card" key={i}>
          <div className="exp-header">
            <div className="exp-title">{d.baslik}</div>
            <div className="exp-period">{d.donem}</div>
          </div>
          <ul className="exp-bullets">
            {d.gorevler.map((g, j) => <li key={j}>{g}</li>)}
          </ul>
          <div className="exp-tech">
            {d.teknolojiler.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}
