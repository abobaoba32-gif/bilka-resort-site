import { build } from 'esbuild'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'

const outputDirectory = 'dist'
const entryScript = '<script src="src/app/browser-entry.jsx"></script>'

await rm(outputDirectory, { recursive: true, force: true })
await mkdir(`${outputDirectory}/assets`, { recursive: true })

await build({
  entryPoints: ['src/app/browser-entry.jsx'],
  bundle: true,
  minify: true,
  jsx: 'automatic',
  platform: 'browser',
  target: ['es2020'],
  outfile: `${outputDirectory}/assets/app.js`,
})

const sourceHtml = await readFile('index.html', 'utf8')
if (!sourceHtml.includes(entryScript)) {
  throw new Error(`Could not find the Playcode entry script in index.html: ${entryScript}`)
}

const deployHtml = sourceHtml
  .replace('  </head>', '    <link rel="stylesheet" href="/assets/app.css">\n  </head>')
  .replace(entryScript, '<script defer src="/assets/app.js"></script>')

await writeFile(`${outputDirectory}/index.html`, deployHtml)
