/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{html,js,vue,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-color': '#2F80ED',
				'text-color': '#4F4F4F',
				'gray-bg': '#F2F2F2',
				'toggle-bg': '#bdbdbd',
				'booking-gray': '#F2F2F2',
				'red-text': '#EB5757',
				'orang-text': '#F2994A',
				'green-text': '#219653',
			},
			gridColumn: {
				'span-16': 'span 16 / span 16',
			},
		},
		fontFamily: {
			WorkSans: ['Work Sans, sans-serif;'],
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		},
		container: {
			padding: '100px',
			center: true,
		},
	},
	plugins: [],
};
