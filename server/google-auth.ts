const baseUrl = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const authUrl = `https://${baseUrl}:${port}/api/auth`;
const callbackUrl = `${authUrl}/callback`;
