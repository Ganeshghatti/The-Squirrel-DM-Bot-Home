/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ['res.cloudinary.com', 'wallpapers.com' ],

        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'wallpapers.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            },

        ],

    }
};

export default nextConfig;
