/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Inter', 'sans-serif'],
				body: ['IBM Plex Sans', 'sans-serif'],
				ibm: ['IBM Plex Sans', 'sans-serif']
			},
			colors: {
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				border: 'rgb(var(--border) / <alpha-value>)'
			}
		}
	},
	plugins: []
};
