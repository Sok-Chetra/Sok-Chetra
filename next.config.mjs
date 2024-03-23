import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export",
   basePath: '/sok_chetra',
};

export default withNextIntl(nextConfig);
