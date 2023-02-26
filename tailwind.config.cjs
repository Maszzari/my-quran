/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lpmq: ["lpmq", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
	},
	plugins: [],
};
