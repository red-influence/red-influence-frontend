const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {},
				},
				dark: {
					layout: {},
					colors: {
						background: '#040D12', // or DEFAULT
						foreground: '#DDE6ED', // or 50 to 900 DEFAULT
						primary: {
							foreground: '#DDE6ED',
							DEFAULT: '#E0003B',
						},
					},
				},
			},
		}),
	],
	purge: {
		mode: 'all',
		content: [
			'./src/**/*.{js,jsx,ts,tsx}',
			'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		],
	},
};
