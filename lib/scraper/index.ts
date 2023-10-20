export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // BrightData Proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
}
