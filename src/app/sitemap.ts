export default async function sitemap() {
  const baseUrl = "https://frontend-test.jeffymesquita.dev";

  return [{ url: baseUrl, lastModified: new Date() }];
}
