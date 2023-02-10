/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				popIn: {
					"0%": { width: "50%" },
					"100%": { width: "100%" },
				},
				fadeIn: {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
			},
			animation: {
				popIn: "popIn .7s ease-in-out",
				fadeIn: "fadeIn 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
