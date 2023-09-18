/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain'
            }
        },
    },
    plugins: [],
}