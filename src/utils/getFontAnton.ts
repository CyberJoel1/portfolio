import localFont from 'next/font/local'


export const anton = localFont({
    src: [
        {
            path: '../assets/Anton/Anton-Regular.ttf',
            weight: '400'
        }
    ],
    variable: '--font-anton'
})