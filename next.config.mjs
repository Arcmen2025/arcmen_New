/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dpflidsbg/image/upload/**'
            },
            {
                protocol: 'https',
                hostname: 'api-arcmeninterior.webdadsprojects.com',
                pathname: '/storage/posterimage/**'
            }
        ]
    }
};

export default nextConfig;
