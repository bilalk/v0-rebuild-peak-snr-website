/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Add this line
  images: {
    unoptimized: true, // <-- Add this if you use images
  },
};

export default nextConfig;
