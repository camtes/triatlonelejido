/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'tri-black': '#0F0100',
				'tri-orange': '#FF5501',
				'tri-orange-2': '#FF8219',
			}
		},
	},
	plugins: [],
}
