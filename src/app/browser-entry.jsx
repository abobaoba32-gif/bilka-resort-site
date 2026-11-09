import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Bilka Resort</h1>
      <p>Сайт успішно працює та розгорнутий на Netlify!</p>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
