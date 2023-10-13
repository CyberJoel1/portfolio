/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
    images: {
        domains: ['i0.wp.com','thevalley.es'], // Agrega aquí el dominio de la imagen permitido
      },
      
}

module.exports = nextConfig
