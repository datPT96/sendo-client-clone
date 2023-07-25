/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                '1/2': '50%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '4/12': '33.3333333333%',
                '5/12': '41.666667%',
            },
        },
        colors: {
            topRed: '#d52220',
            red: '#ee2624',
            white: '#fff',
            black: '#0f1e29',
            gray: '#f2f3f4',
            blue: '#0f62fe',
        },
        screens: {
            sm: '1025px',
            lg: '1272px',
            '2xl': '1356px',
        },
        container: {
            center: true,
        },
        fontSize: {
            sm: '1.2rem',
            base: '1.4rem',
        },
    },
    plugins: [],
}
