/** @type {import('next').NextConfig} */

// Static export (for SiteGround) only kicks in for the production build, via the
// `npm run build` script which sets BUILD_EXPORT=true. Plain `next dev` stays in
// normal mode so the local preview stays reliable.
const isExport = process.env.BUILD_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
