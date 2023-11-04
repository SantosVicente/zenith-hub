/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"], // Domínios permitidos
    formats: ["image/avif", "image/webp"], // Formatos de imagem permitidos
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
