
import withTM from 'next-transpile-modules';

const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  module,.exports = { basePath: isProd ? '/your-repo-name' : '', assetPrefix: isProd ? '/your-repo-name/' : '', images: { unoptimized: true, // GitHub Pages does not support Next.js image optimization }, };
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
module.exports = nextConfig