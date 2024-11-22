/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'custom',
    // domains: [
    //   's3.amazonaws.com',

    //   // delete this once development is done
    //   'docs.material-tailwind.com',
    //   'images.unsplash.com',
    //   'phoyolink.com',
    //   '*',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tino-bucket.s3.amazonaws.com/**',
      },
    ],
  },
};

export default nextConfig;
