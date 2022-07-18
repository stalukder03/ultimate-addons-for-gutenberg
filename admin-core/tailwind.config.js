const { boxShadow } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./assets/src/dashboard-app/**/*.{html,js}',
	],
	plugins: [
		require( '@tailwindcss/forms' ),
	],
	theme: {
		extend: {
			colors: {
				wpcolor : '#6104ff',
				wphovercolor : '#3a009f',
				wphoverbgcolor : '#9d62ff14',
				'spectra': {
					DEFAULT: '#6104FF',
					'hover': '#5300E0',
				},
			},
			fontFamily: {
				inter: ['"Inter"', 'sans-serif'],
			},
			boxShadow: {
				'overlay-left': '-16px 0px 80px -24px rgba(0, 0, 0, 0.16)',
				'overlay-right': '16px 0px 80px -24px rgba(0, 0, 0, 0.16)',
			},
		},
	},
	variants: {
		extend: {},
	},
}
