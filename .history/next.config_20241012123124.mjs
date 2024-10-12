/** @type {import('next').NextConfig} */
const nextConfig = {

  crossOrigin: 'anonymous',
  images: {
    domains: ['www.kiwop.com', 'cdn.example.com'],  // Remplace par le domaine de tes images
  },
};

export default nextConfig;
