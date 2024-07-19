export const oktaConfig = {
    clientId: '0oai33d4wymmsn8UD5d7',
    issuer: 'https://dev-75987745.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}