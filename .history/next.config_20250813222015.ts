
import withTM from 'next-transpile-modules';

const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  basePath: isProd ? '/your-repo-name' : '', 
    assetPrefix: isProd ? '/your-repo-name/' : '', 
    images: { unoptimized: true}, 
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);