import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { StoreProviders } from './store/StoreProviders';
import { LogIn } from './components/4pages';
import { Text } from './ui/typography/Text';

export const App = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <LogIn />;
  }

  return (
    <>
      <Text>KnoTodo</Text>
      {/* <Home /> */}
      <Router>
        <StoreProviders>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </StoreProviders>
      </Router>
    </>
  );
};
