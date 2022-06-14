/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'c-dark-purple': '#474073',
				'c-mid-purple': '#4F4D8C',
				'c-light-purple': '#8F8EBF',
				'c-mid-blue': '#9896E0'
			}
		}
	},
	plugins: []
};
