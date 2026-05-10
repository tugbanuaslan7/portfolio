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
          <div className="contact-email">eposta@gmail.com</div>
          <div className="contact-location">Ataşehir, İstanbul / Yalova</div>
        </div>
        <div>
          <ul className="social-list">
            <li>
              <span className="social-name">LinkedIn</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">www.linkedin.com/in/tuğba-nur-aslan →</a>
            </li>
            <li>
              <span className="social-name">GitHub</span>
              <a href="https://github.com" target="_blank" rel="noreferrer">github.com/kullanici →</a>
            </li>
            <li>
              <span className="social-name">Portföy Kaynak Kodu</span>
              <a href="https://github.com" target="_blank" rel="noreferrer">github.com/kullanici/site →</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
