const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
        reactCompiler: true,
        webpackBuildWorker: true,
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
