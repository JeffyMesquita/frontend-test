module.exports = {
  siteUrl: "https://frontend-test.jeffymesquita.dev",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap.xml", "/some-other-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://frontend-test.jeffymesquita.dev.xml"],
  },
};
