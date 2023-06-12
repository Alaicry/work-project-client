/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"black-rgba": "rgba(0, 0, 0, 0.4)",
			},
			padding: {
				"10px": "10px",
				"5px": "5px",
			},
		},
	},
	plugins: [],
};
