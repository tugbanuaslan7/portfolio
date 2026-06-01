export default function Contact() {
  return (
    <section className="section" id="iletisim">
      <div className="section-header">
        <span className="section-title">İLETİŞİM</span>
      </div>
      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            İş birliği fırsatları, iş imkânları veya herhangi bir konuda benimle
            iletişime geçebilirsiniz.
          </p>
          {/* E-posta adresin güncellendi ve tıklanabilir yapıldı */}
          <div className="contact-email">
            <a href="mailto:tugbanur.aslan7@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              tugbanur.aslan7@gmail.com
            </a>
          </div>
          <div className="contact-location">Ataşehir, İstanbul / Yalova</div>
        </div>
        <div>
          <ul className="social-list">
            <li>
              <span className="social-name">LinkedIn</span>
              {/* LinkedIn yönlendirme linki düzeltildi */}
              <a href="https://www.linkedin.com/in/tuğba-nur-aslan" target="_blank" rel="noreferrer">
                www.linkedin.com/in/tuğba-nur-aslan →
              </a>
            </li>
            <li>
              <span className="social-name">GitHub</span>
              {/* GitHub profil linkin eklendi */}
              <a href="https://github.com/tugbanuaslan7" target="_blank" rel="noreferrer">
                github.com/tugbanuaslan7 →
              </a>
            </li>
            <li>
              <span className="social-name">Portföy Kaynak Kodu</span>
              {/* Portföyünün kaynak kod linki eklendi */}
              <a href="https://github.com/tugbanuaslan7/portfolio" target="_blank" rel="noreferrer">
                github.com/tugbanuaslan7/portfolio →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}