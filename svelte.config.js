import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null,
			// fallback: 'index.html',
			precompress: false,
			strict: true,
			paths: {
				base: process.env.NODE_ENV === 'production' ? '/svelte-template' : '',
			}
		})
	}
}

export default config
