import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from '../../ui';
import { LogInCollection } from '../3collection';
import { Loader } from '../../ui/utils/Loader';
import { ErrorMessage } from '../1standalone/ErrorMessage';

export const LogIn: FC = () => {
  const { isLoading, error, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Container centerContent>
      <LogInCollection onLogIn={loginWithRedirect} />
    </Container>
  );
};
