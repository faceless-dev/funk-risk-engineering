export default {
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
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};
