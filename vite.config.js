import { defineConfig } from 'vite'
import TemplatePlugin from './plugins/vite-template-plugin'

export default defineConfig({
	server: { port: 3000, host: true },
	plugins: [TemplatePlugin()],
	base: '/lexica-art-api/',
})
