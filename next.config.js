/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flaticon.com','uxwing.com','picsum.photos','www.wsevolves.com','cdn.jsdelivr.net', 'semantic-ui.com', 'www.gstatic.com', 'amp.dev', 'www.opencart.com', 'www.svgrepo.com', 'raw.githubusercontent.com', 'getuikit.com',"images.unsplash.com"], // Only the domain name, without "https://" or paths
  },
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['picsum.photos', 'www.wsevolves.com'],// Only the domain name, without "https://" or paths
//   },
// };

// module.exports = nextConfig;
