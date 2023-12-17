/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    serverComponentsExternalPackages: ["sqlite3", "csv-parser"],
  },
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
