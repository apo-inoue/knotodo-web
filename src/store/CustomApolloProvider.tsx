import React, { FC, useState, useCallback } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import { useAuth0, IdToken } from '@auth0/auth0-react';
import { Loader } from '../ui/utils/Loader';

export const CustomApolloProvider: FC = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();
  const [tokenState, setTokenState] = useState<IdToken | null>(null);
  const getToken = useCallback(async () => {
    const token: IdToken = await getIdTokenClaims();

    return token;
  }, [getIdTokenClaims]);
  if (!tokenState) {
    getToken()
      .then(res => {
        setTokenState(res);

        // eslint-disable-next-line no-console
        return console.log(res);
      })

      // eslint-disable-next-line no-console
      .catch(() => new Error());
  }

  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            todos: {
              merge: false,
            },
            categories: {
              merge: false,
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: 'https://right-goldfish-91.hasura.app/v1/graphql',
      headers: {
        Authorization: `Bearer ${tokenState?.__raw}`,
      },
    }),
  });

  if (!tokenState) return <Loader>hel</Loader>;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
