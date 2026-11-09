import '../styles/global.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

const phone = '+380 68 053 97 09'
const phoneLink = 'tel:0680539709'
const mapLink = 'https://www.google.com/maps/search/?api=1&query=Bilka%20Resort%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%91%D1%96%D0%BB%D1%8C%D0%BA%D0%B0'
const instagramLink = 'https://www.instagram.com/bilka_resort/'

export const route = {
  path: '/',
  title: 'Bilka Resort — відпочинковий комплекс',
  description: 'Басейн, сауна, чан, альтанки',
  hydration: 'load',
}

const activities = [
  { number: '01', title: 'Басейн', text: 'Літній відпочинок' },
  { number: '02', title: 'Сауна й чан', text: 'Релакс та оздоровлення' },
  { number: '03', title: 'Альтанки', text: 'Затишні місця для компаній' },
  { number: '04', title: 'Будинок і риболовля', text: 'Комфортне проживання' }
]

function PhoneLink({ children, className }) {
  return <a className={className} href={phoneLink}>{children || phone}</a>
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top">Bilka Resort</a>
        <nav className="main-nav" aria-label="Основна навігація">
          <a href="#vidpochynok">Відпочинок</a>
          <a href="#tsiny">Ціни</a>
          <a href="#location">Як доїхати</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Відпочинок у Bilka Resort</h1>
          <p>Басейн, сауна, чан та затишні альтанки</p>
          <a className="btn-primary" href={phoneLink}>Забронювати</a>
        </section>
      </main>
    </div>
  )
}

// === ЭТОТ БЛОК ОТВЕЧАЕТ ЗА ЗАПУСК САЙТА (ОБЯЗАТЕЛЬНО В САМОМ НИЗУ) ===
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<HomePage />)
}
