import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, trusted images only — serve inline instead of forcing download,
    // and skip the SVG-sandboxing CSP that Next applies to optimized images by default.
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'",
  },
};

export default nextConfig;
