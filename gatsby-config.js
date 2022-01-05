module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Box-Shadows",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-108293086-2",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
