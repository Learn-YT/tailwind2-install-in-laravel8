const defaultTheme = require('tailwindcss/defaultTheme');

// Default Theme
module.exports = {
    purge: [
        './storage/framework/views/*.php',
        '.resources/views/**/*.blade.php'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // colors: {
        //     // Build your palette here
        // },
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
}
