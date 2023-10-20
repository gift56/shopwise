export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //   curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_388bfeca-zone-shopwise:5wfs6ne0o6rb -k https://lumtest.com/myip.json

  // BrightData Proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const option = {
    auth: {
      username: `${username}-session-${session_id}`,
    },
  };
}
