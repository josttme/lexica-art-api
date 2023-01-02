/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
			},
			colors: {
				primary: '#000019',
				secondary: '#002d6b',
				terceary: '#06459b',
			},
		},
	},
	plugins: [],
}
