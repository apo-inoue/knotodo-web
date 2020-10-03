import React, { FC } from 'react';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader } from '../../ui/utils/Loader';
import { ErrorMessage } from '../1standalone/ErrorMessage';


export const LogIn: FC = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Container centerContent>
      <LogInCollection onLogIn={ loginWithRedirect} />
    </Container>
  );
};
