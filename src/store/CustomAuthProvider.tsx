import React, { FC } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export const CustomAuthProvider: FC = ({ children }) => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN || ''}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID || ''}
      redirectUri={window.location.origin}>
      {children}
    </Auth0Provider>
  );
};
