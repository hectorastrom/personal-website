import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Resolve aliases
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  },
};

export default nextConfig;
