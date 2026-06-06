// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,

//     images: {
//         qualities: [60, 75, 85],
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'res.cloudinary.com',
//                 pathname: '/dpflidsbg/image/upload/**'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'api-arcmeninterior.webdadsprojects.com',
//                 pathname: '/storage/posterimage/**'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'arcmen-uploads.s3.us-east-1.amazonaws.com',
//                 pathname: '/images/**'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'img.youtube.com',
//                 pathname: '/vi/**'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'www.shutterstock.com',
//                 pathname: '/**'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'assets.webdads2u.com',
//                 pathname: '/images/**'
//             }
//         ]
//     }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        qualities: [60, 75, 85],
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
            },
            {
                protocol: 'https',
                hostname: 'arcmen-uploads.s3.us-east-1.amazonaws.com',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                pathname: '/vi/**'
            },
            {
                protocol: 'https',
                hostname: 'www.shutterstock.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'assets.webdads2u.com',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;