const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    output: 'standalone',
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
