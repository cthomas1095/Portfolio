
import withTM from 'next-transpile-modules';

const nextConfig = {
  basepatth
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
module.exports = nextConfig