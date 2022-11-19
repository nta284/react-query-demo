module.exports = {
    content: [
        "./components/**/*.{js,jsx,ts,tsx}",
        "./lib/**/*.{js,jsx,ts,tsx}",
        "./views/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            zIndex: {
                '100': '100'
            },
            width: {
                '15': '3.75rem',
                '18': '4.5rem',
                '50': '12.5rem',
                '100': '25rem',
                '120': '30rem',
                '140': '35rem',
                '150': '40rem'
            },
            height: {
                '15': '3.75rem',
                '18': '4.5rem',
                '50': '12.5rem',
                '100': '25rem',
                '120': '30rem',
                '140': '35rem',
                '150': '40rem'
            }
        }
    },
    plugins: [],
}
