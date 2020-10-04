import React, { FC, useEffect, useState, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthCtxProvider } from '../contexts/auth';
import { AuthState } from '../types/auth';

export const AuthProvider: FC = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState<AuthState>({ token: null, standBy: true });
  const getToken = useCallback(async () => {
    const token = await getAccessTokenSilently();

    return setState({ ...state, token });
  }, [getAccessTokenSilently, state]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    getToken().catch(err => console.log(err));
  }, [getToken]);

  const seedDataStandByHandler = () => {
    setState({ ...state, standBy: true });
  };

  const value = {
    state,
    seedDataStandByHandler,
  };

  return <AuthCtxProvider value={value}>{children}</AuthCtxProvider>;
};
