/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Proxy analytics
      { source: "/va/:path*", destination: "/_vercel/insights/:path*" },
      { source: "/vs/:path*", destination: "/_vercel/speed-insights/:path*" },
    ];
  },
};
module.exports = nextConfig;
