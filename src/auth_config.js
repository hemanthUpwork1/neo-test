export default {
  domain: process.env.REACT_APP_DOMAIN,
  clientId: process.env.REACT_APP_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
    // audience: window.location.origin,
    scope: "openid profile email",
  }
};
