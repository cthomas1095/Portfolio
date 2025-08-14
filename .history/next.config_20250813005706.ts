
import withTM from 'next-transpile-modules';


const nextConfig = {
  basepath: '/cthomas-portfolio',
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
module.exports = nextConfig