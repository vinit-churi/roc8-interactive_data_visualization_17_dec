/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    serverComponentsExternalPackages: ["sqlite3", "csv-parser"],
  },
};

module.exports = nextConfig;
