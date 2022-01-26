module.exports = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
  images: {
    domains: ["app.contentful.com", "images.ctfassets.net"],
  },
  env: {
    SPACE:  process.env.SPACE,
    ACCESS_TOKEN:  process.env.ACCESS_TOKEN,
  },
};
