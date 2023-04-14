const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "app4",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ModuleC": "./components/ModuleC",
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;