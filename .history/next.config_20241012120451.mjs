/** @type {import('next').NextConfig} */
const nextConfig = {

  crossOrigin: 'anonymous',
  images: {
    domains: ['example.com', 'cdn.example.com'],  // Remplace par le domaine de tes images
  },
};

export default nextConfig;
