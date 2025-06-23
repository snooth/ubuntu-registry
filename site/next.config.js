/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    name: "Ubuntu Registry",
    description: "Basic Ubuntu desktop for Kasm",
    icon: "/ubuntu.png",
    listUrl: "https://yourusername.github.io/ubuntu-registry/list.json",
    contactUrl: "https://github.com/yourusername/ubuntu-registry/issues"
  },
  basePath: "/1.0",
};

module.exports = nextConfig;
