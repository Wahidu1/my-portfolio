import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_SITE_URL = 'https://wahidulislam-site.web.app'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

  return {
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'html-site-url',
        transformIndexHtml(html) {
          return html.replace(/__SITE_URL__/g, siteUrl)
        },
      },
    ],
  }
})
