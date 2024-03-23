import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
         },
         {
            protocol: 'https',
            hostname: 'c4.wallpaperflare.com',
            port: '',
         },
      ],
   },
};

export default withNextIntl(nextConfig);