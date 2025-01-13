/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image configuration
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**', // Allow all paths under this hostname
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                pathname: '/**', // Allow all paths under this hostname
            },
        ],
    },

    // Disable Hot Module Replacement (HMR)
    reactStrictMode: false, // Optional: Turn off React strict mode if unnecessary
    onDemandEntries: {
        maxInactiveAge: 25 * 1000, // Cache entries for 25 seconds
        pagesBufferLength: 2, // Only keep 2 pages in the buffer
    },
};

export default nextConfig;
