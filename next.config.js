/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    nextScriptWorkers: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/weather",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
