// Eğitim bilgilerini buradan düzenle
const egitimler = [
  {
    tarih: '2021 — 2026',
    kurum: 'Yalova Üniversitesi',
    aciklama: 'Lisans eğitimim süresince algoritma, veri yapıları, veritabanı sistemleri ve bilgisayar ağları gibi temel derslerin yanı sıra yazılım geliştirme ve SQL tabanlı uygulamalar üzerine çalıştım. GANO: 3.20 / 4.00',
    etiketler: ['BİLGİSAYAR MÜHENDİSLİĞİ', 'LİSANS'],
  },
  {
    tarih: ' Ocak 2023 — Şubat 2023',
    kurum: '42 İstanbul',
    aciklama: 'Proje tabanlı bir eğitim modeli sunan 42 ağının dünya genelindeki kampüslerinden birinde, akran programlama yöntemiyle C dili ve sistem programlama üzerine yoğunlaştım.',
    etiketler: ['YAZILIM GELİŞTİRME', 'C DİLİ'],
  },
]

export default function Education() {
  return (
    <section className="section" id="egitim">
      <div className="section-header">
        <span className="section-title">EĞİTİM</span>
      </div>
      {egitimler.map((e, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-date">{e.tarih}</div>
          <div>
            <div className="edu-name">{e.kurum}</div>
            <p className="edu-desc">{e.aciklama}</p>
            <div className="tags">
              {e.etiketler.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
