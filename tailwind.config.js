/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./index.html', './src/**/*.{html,js,vue,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-color': '#2F80ED',
				'text-color': '#4F4F4F',
				'gray-bg': '#F2F2F2',
			},
		},
		fontFamily: {
			WorkSans: ['Work Sans, sans-serif;'],
		},
		container: {
			margin: 'auto',
			padding: '100px',
			center: true,
		},
	},
	plugins: [],
};
