import localFont from 'next/font/local'

export const anton = localFont({
    src: [
        {
            path: '../assets/Oswald/Oswald-VariableFont_wght.ttf',
            weight: '400'
        }
    ],
    variable: '--font-anton'
})