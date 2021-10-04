const baseUrl = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

export const authUrl = `https://${baseUrl}:${port}/api/auth/google`;
export const callbackUrl = `${authUrl}/callback`;
