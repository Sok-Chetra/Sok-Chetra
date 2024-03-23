import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "standalone",
   basePath: process.env.NODE_ENV === "production" ? "" : undefined,
   experimental: {
      appDir: true,
   },
   images: {
      unoptimized: true,
   },
   reactStrictMode: true,
};

export default withNextIntl(nextConfig);