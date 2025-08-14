
import withTM from 'next-transpile-modules';

const isProd = process.env.NODE_ENV = 'production0'

const nextConfig = {
  basepath: '/cthomas-portfolio',
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
module.exports = nextConfig