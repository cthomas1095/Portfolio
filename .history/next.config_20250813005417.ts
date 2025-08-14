
import withTM from 'next-transpile-modules';

const nextConfig = {
  basepath:
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
module.exports = nextConfig