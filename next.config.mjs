import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
   output: "standalone",
   basePath: process.env.NODE_ENV === "production" ? "" : undefined,
   experimental: {
      appDir: true,
   },
   images: {
      unoptimized: true,
   },
   reactStrictMode: true,
=======
>>>>>>> 71312bcd14e782a00026561b557bc1d3082f1394
};

export default withNextIntl(nextConfig);
