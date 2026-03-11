import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    yellow: '#ffde59',
                    pink: '#ff66c4',
                    cyan: '#00e5ff',
                    green: '#00e676', // Light mode success
                    red: '#ff1744',
                    beige: '#f4f0ec', // Light mode background
                    neonGreen: '#39ff14', // Dark mode accent
                    neonPurple: '#b026ff', // Dark mode accent
                    darkBg: '#121212',
                    darkCard: '#1e1e1e',
                }
            },
            boxShadow: {
                'neubrutalism-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
                'neubrutalism-md': '4px 4px 0px 0px rgba(0,0,0,1)',
                'neubrutalism-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
                'neubrutalism-dark-sm': '2px 2px 0px 0px rgba(255,255,255,1)',
                'neubrutalism-dark-md': '4px 4px 0px 0px rgba(255,255,255,1)',
                'neubrutalism-dark-lg': '8px 8px 0px 0px rgba(255,255,255,1)',
                'neubrutalism-accent': '4px 4px 0px 0px #00e5ff',
            }
        },
    },

    plugins: [forms],
};
