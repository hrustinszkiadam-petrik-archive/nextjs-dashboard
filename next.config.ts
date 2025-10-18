import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	allowedDevOrigins: ['*.hrustinszki.tech'],
	experimental: {
		useCache: true,
	},
};

export default nextConfig;
