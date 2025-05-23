export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    reactCompiler: true,
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  reactStrictMode: true,
};
