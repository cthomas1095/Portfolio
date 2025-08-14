
import withTM from 'next-transpile-modules';

const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  basePath: isProd ? '/cthomas-portfolio' : '', 
    assetPrefix: isProd ? '/cthomas-portfolio' : '', 
    images: { unoptimized: true}, 
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);