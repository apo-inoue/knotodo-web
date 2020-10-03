
import React, { FC, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader } from '../../ui';
import { AuthCtxProvider } from '../contexts/auth';
import { AuthCtxType, AuthState } from '../types/auth';

export const AuthProvider: FC = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState<AuthState>({token: null, standBy: true})
  const getToken = async() => {
    const token = await getAccessTokenSilently()
    return setState({...state, token})
  }

  useEffect(() => {
    getToken().catch(err => console.log(err))
  }, [getAccessTokenSilently]);

  const seedDataStandByHandler = () => {
    setState({...state, standBy: true})
  };

  const value = {
    state,
    seedDataStandByHandler
  };

  if (state.token) {
    return <Loader/>
  }

  return (
    <AuthCtxProvider value={value}>{children}</AuthCtxProvider>
  );
};
