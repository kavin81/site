import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const isDev = process.argv.includes("dev");
const isBuild = process.argv.includes("build");

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  import("velite").then(m => m.build({ watch: isDev, clean: !isDev }));
}

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {

  distDir: 'dist',
  // modularizeImports: {}, // Ensures only used imports are included (for supported libraries)
  // webpack(config: any) {
  //   config.optimization.splitChunks = {
  //     chunks: 'all',
  //     minSize: 3000, // Lowered for more granular chunking
  //     maxSize: 80000, // Lowered to force smaller chunks
  //     maxAsyncRequests: 50, // Lowered for more aggressive splitting
  //     maxInitialRequests: 50,
  //     automaticNameDelimiter: '-',
  //     enforceSizeThreshold: 50000, // Lowered to enforce chunk splitting
  //     cacheGroups: {
  //       default: false,
  //       vendors: false,
  //       shared: {
  //         name: 'shared',
  //         minChunks: 2, // Lowered to share more code
  //         priority: 10,
  //         reuseExistingChunk: true,
  //         enforce: true,
  //       },
  //       components: {
  //         test: /[\\/]components[\\/]/,
  //         name(module: any) {
  //           const file = module.identifier().split(/[\\/]/).pop()?.replace(/\.[^/.]+$/, '');
  //           return `component-${file?.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  //         },
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   };
}


export default nextConfig as NextConfig;
