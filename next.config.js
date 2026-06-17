const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
	output: "export",
	// your Next.js configuration
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60,
		unoptimized: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
});
