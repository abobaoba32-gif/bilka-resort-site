import React from 'react';
import ReactDOM from 'react-dom/client';

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');
        
        :root {
          font-family: 'DM Sans', sans-serif;
          color: #26342d;
          background: #f4f2ec;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          --paper: #f4f2ec;
          --ink: #26342d;
          --pine: #203b33;
          --pine-deep: #172b26;
          --muted: #68736c;
          --line: rgba(38, 52, 45, .18);
          --gold: #d6ad77;
          --display: 'Playfair Display', Georgia, serif;
          --body: 'DM Sans', sans-serif;
          --content: 1160px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 88px; }
        body { margin: 0; min-width: 320px; background: var(--paper); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.55; }
        button, a { font: inherit; }
        a { color: inherit; text-decoration: none; }
        button, a { -webkit-tap-highlight-color: transparent; }
        :focus-visible { outline: 3px solid var(--gold); outline-offset: 4px; }
        img { display: block; max-width: 100%; }
        .site-shell { overflow: clip; }
        
        .site-header { position: absolute; z-index: 5; inset: 0 0 auto; height: 84px; padding: 0 max(28px, calc((100vw - var(--content)) / 2)); display: flex; align-items: center; justify-content: space-between; color: white; border-bottom: 1px solid rgba(255,255,255,.19); }
        .wordmark { font-family: var(--display); font-size: 25px; font-weight: 700; letter-spacing: -.06em; }
        .wordmark span { font-weight: 500; font-style: italic; }
        .main-nav { display: flex; align-items: center; gap: 34px; font-size: 13px; }
        .main-nav a, .header-call { transition: opacity .2s ease; }
        .main-nav a:hover, .header-call:hover { opacity: .7; }
        .header-call { border-bottom: 1px solid rgba(255,255,255,.6); padding-bottom: 4px; font-size: 13px; }
        
        .hero { min-height: 700px; height: min(850px, 100svh); max-height: 900px; position: relative; display: flex; align-items: center; color: white; background: var(--pine); isolation: isolate; }
        .hero-shade { position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, rgba(15,35,29,.24) 0%, rgba(17,39,32,.08) 100%), linear-gradient(0deg, rgba(15,35,29,.18), transparent 40%); }
        .hero-content { width: min(var(--content), calc(100% - 56px)); margin: 50px auto 30px; position: relative; z-index: 1; }
        .eyebrow, .section-kicker, .card-label { text-transform: uppercase; letter-spacing: .13em; font-size: 11px; font-weight: 600; }
        .eyebrow { display: flex; align-items: center; gap: 11px; margin: 0 0 25px; color: rgba(255,255,255,.85); }
        .eyebrow-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 5px rgba(214,173,119,.22); }
        
        .hero h1, .section-wrap h2, .pricing-heading h2 { font-family: var(--display); font-size: clamp(58px, 8.4vw, 112px); font-weight: 500; line-height: .98; letter-spacing: -.055em; margin: 0; }
        .hero h1 em, .section-wrap h2 em, .pricing-heading h2 em { font-weight: 500; }
        .hero-description { max-width: 430px; margin: 27px 0 30px; color: rgba(255,255,255,.88); font-size: 17px; line-height: 1.65; }
        .hero-actions { display: flex; align-items: center; gap: 26px; }
        .button { min-height: 54px; padding: 0 21px; display: inline-flex; align-items: center; justify-content: center; gap: 28px; border-radius: 999px; font-size: 13px; font-weight: 700; transition: transform .2s ease, background .2s ease, color .2s ease; }
        .button:hover { transform: translateY(-2px); }
        .button-light { color: var(--pine-deep); background: var(--paper); }
        .button-light:hover { background: white; }
        .button-arrow { font-size: 20px; line-height: 1; }
        .text-link { padding: 9px 0; font-size: 13px; color: rgba(255,255,255,.9); }
        .text-link span { margin-left: 6px; }
        
        .hero-bottom { position: absolute; left: max(28px, calc((100vw - var(--content)) / 2)); right: max(28px, calc((100vw - var(--content)) / 2)); bottom: 28px; display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,.35); padding-top: 12px; color: rgba(255,255,255,.76); font-size: 11px; }
        .scroll-cue { display: none; }
        .section-wrap { width: min(var(--content), calc(100% - 56px)); margin-inline: auto; }
        .welcome { padding-top: 105px; padding-bottom: 116px; }
        .section-kicker { display: flex; align-items: center; gap: 15px; color: var(--muted); }
        .section-kicker span:first-child { color: #b18552; }
      `}</style>

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

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage />);
