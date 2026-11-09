import '../styles/global.css'
const phone = '+380 68 053 97 09'
const phoneLink = 'tel:0680539709'
const mapLink = 'https://www.google.com/maps/search/?api=1&query=Bilka%20Resort%20%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%20%D0%91%D1%96%D0%BB%D0%BA%D0%B0'
const instagramLink = 'https://www.instagram.com/bilka_resort/'

export const route = {
  path: '/',
  title: 'Bilka Resort — відпочинковий комплекс у Верхній Білці',
  description: 'Басейн, сауна, чан, альтанки, будинок і риболовля у Bilka Resort, село Верхня Білка. Телефонуйте для бронювання.',
  hydration: 'load',
}

const activities = [
  { number: '01', title: 'Басейн', text: 'Літній день біля води для дорослих і дітей.' },
  { number: '02', title: 'Сауна й чан', text: 'Тепло, холодна купіль і час тільки для своєї компанії.' },
  { number: '03', title: 'Альтанки', text: 'Відкриті та закриті місця для зустрічі з близькими.' },
  { number: '04', title: 'Будинок і риболовля', text: 'Залишайтеся довше або приїжджайте за спокійним днем.' },
]

function PhoneLink({ children = 'Зателефонувати для бронювання', className = '' }) {
  return <a className={className} href={phoneLink} aria-label={`Зателефонувати за номером ${phone}`}>{children}</a>
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Bilka Resort — на головну">bilka<span>resort</span></a>
        <nav className="main-nav" aria-label="Головна навігація">
          <a href="#vidpochynok">Відпочинок</a>
          <a href="#tsiny">Ціни</a>
          <a href="#location">Як доїхати</a>
        </nav>
        <PhoneLink className="header-call">{phone}</PhoneLink>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> Верхня Білка · відпочинок серед природи</p>
            <h1 id="hero-title">Місце для<br /><em>свого кола.</em></h1>
            <p className="hero-description">Басейн, сауна й чан, альтанки, будинок і риболовля — обирайте свій спосіб відпочити в Bilka Resort.</p>
            <div className="hero-actions">
              <PhoneLink className="button button-light"><span>Зателефонувати · {phone}</span><span className="button-arrow" aria-hidden="true">↗</span></PhoneLink>
              <a className="text-link" href="#vidpochynok">Обрати відпочинок <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-bottom"><span>Bilka Resort</span><span>с. Верхня Білка</span><span>Відпочинок поруч із природою</span></div>
          <a className="scroll-cue" href="#vidpochynok" aria-label="Прокрутити до варіантів відпочинку">↓</a>
        </section>

        <section className="welcome section-wrap" id="vidpochynok">
          <div className="section-kicker"><span>01</span><span>Оберіть свій ритм</span></div>
          <div className="welcome-grid">
            <h2>На кілька годин<br />чи на цілий день.</h2>
            <div className="welcome-copy">
              <p>Приїжджайте поплавати, відпочити в сауні з чаном, зібратися за столом в альтанці або залишитися в будинку на ніч.</p>
              <a className="inline-link" href="#tsiny">Переглянути ціни <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="activity-list">
            {activities.map((item) => (
              <article className="activity-row" key={item.number}>
                <span className="activity-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#tsiny" aria-label={`Ціни: ${item.title}`} className="row-arrow">↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="tsiny">
          <div className="section-wrap">
            <div className="section-kicker section-kicker-light"><span>02</span><span>Плануйте відпочинок</span></div>
            <div className="pricing-heading">
              <h2>Ціни</h2>
              <p>Оберіть формат і зателефонуйте нам — допоможемо уточнити деталі та наявність.</p>
            </div>

            <div className="price-layout">
              <article className="price-card pool-card">
                <div className="price-card-top"><span className="card-label">Вода й сонце</span><span className="card-mark" aria-hidden="true">◌</span></div>
                <h3>Басейн</h3>
                <div className="price-group">
                  <div className="price-line"><span>Будні · дорослі</span><strong>500 ₴</strong></div>
                  <div className="price-line"><span>Будні · діти 6–14 років</span><strong>200 ₴</strong></div>
                </div>
                <div className="price-group">
                  <p className="price-note-title">Вечірній басейн · пн–пт, 16:00–20:00</p>
                  <div className="price-line"><span>Дорослі</span><strong>300 ₴</strong></div>
                  <div className="price-line"><span>Діти 6–14 років</span><strong>150 ₴</strong></div>
                </div>
                <div className="price-group">
                  <p className="price-note-title">Вихідні</p>
                  <div className="price-line"><span>Дорослі</span><strong>700 ₴</strong></div>
                  <div className="price-line"><span>Діти 6–14 років</span><strong>300 ₴</strong></div>
                </div>
                <p className="included-note">Шезлонг входить у вартість, рушник — ні. Діти до 6 років безкоштовно; до 16 років — у супроводі дорослих.</p>
              </article>

              <article className="price-card chan-card">
                <div className="price-card-top"><span className="card-label">Тепло й тиша</span><span className="card-mark" aria-hidden="true">⌁</span></div>
                <h3>Сауна й чан</h3>
                <p className="price-big">1 700 <small>₴ / год</small></p>
                <p className="price-sub">Для компанії до 6 осіб · бронювання від 3 годин</p>
                <div className="price-group">
                  <div className="price-line"><span>Кожна наступна година</span><strong>+500 ₴</strong></div>
                  <div className="price-line"><span>Кожна додаткова особа</span><strong>+400 ₴</strong></div>
                </div>
                <p className="included-note">У вартості: рушники, халати, капці, холодна купіль і спа-пакет. Діти до 14 років — із батьками.</p>
              </article>

              <article className="price-card pavilion-card">
                <div className="price-card-top"><span className="card-label">Зустрічі надворі</span><span className="card-mark" aria-hidden="true">⌂</span></div>
                <h3>Альтанки</h3>
                <div className="price-group">
                  <p className="price-note-title">Відкриті</p>
                  <div className="price-line"><span>Велика · до 10 осіб</span><strong>1 500 ₴</strong></div>
                  <div className="price-line"><span>Стіл із лавами · до 6 осіб</span><strong>800 ₴</strong></div>
                </div>
                <div className="price-group">
                  <p className="price-note-title">Закриті</p>
                  <div className="price-line"><span>Велика</span><strong>4 000 ₴</strong></div>
                  <div className="price-line"><span>Мала · до 10 осіб</span><strong>2 500 ₴</strong></div>
                </div>
                <p className="included-note">Для альтанок передбачені мангал, дрова та інвентар для барбекю.</p>
              </article>

              <article className="price-card house-card">
                <div className="price-card-top"><span className="card-label">Залишайтеся довше</span><span className="card-mark" aria-hidden="true">⌂</span></div>
                <h3>Будинок</h3>
                <p className="price-big">4 000 <small>₴ / доба</small></p>
                <p className="price-sub">Для двох сімей</p>
                <p className="included-note">У вартості: кухня, холодильник, кондиціонер, душ і санвузол, мангал, дрова та інвентар для барбекю.</p>
              </article>
            </div>
            <div className="price-cta"><p>Потрібна риболовля чи хочете уточнити вільні дати?</p><PhoneLink className="button button-gold">Зателефонувати <span className="button-arrow" aria-hidden="true">↗</span></PhoneLink></div>
          </div>
        </section>

        <section className="visit-section section-wrap" id="location">
          <div className="section-kicker"><span>03</span><span>Завітайте до нас</span></div>
          <div className="visit-grid">
            <div>
              <h2>Відпочинок —<br /><em>у Верхній Білці.</em></h2>
              <p className="visit-copy">Зателефонуйте, щоб забронювати або уточнити дорогу. Ми допоможемо вибрати зручний формат відпочинку.</p>
              <PhoneLink className="visit-phone">{phone}</PhoneLink>
            </div>
            <div className="visit-side">
              <div className="location-card">
                <span className="card-label">Відпочинковий комплекс</span>
                <strong>Bilka Resort</strong>
                <span className="location-village">с. Верхня Білка</span>
                <span className="location-cross" aria-hidden="true">↗</span>
              </div>
              <div className="visit-links">
                <a href={mapLink} target="_blank" rel="noreferrer">Знайти на мапі <span aria-hidden="true">↗</span></a>
                <a href={instagramLink} target="_blank" rel="noreferrer">Дивитися Instagram <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">bilka<span>resort</span></a>
        <p>Відпочинок у с. Верхня Білка</p>
        <a href={phoneLink}>{phone}</a>
        <a className="playcode-credit" href="https://playcode.io/ai-website-builder">Built with Playcode</a>
      </footer>
      <a className="mobile-call" href={phoneLink}><span>Зателефонувати</span><span aria-hidden="true">↗</span></a>
    </div>
  )
}