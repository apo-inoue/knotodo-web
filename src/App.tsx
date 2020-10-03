import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { StoreProviders } from './store/StoreProviders';
import { useAuthCtx } from './containers/contexts/auth';
import { LogIn } from './components/4pages';

export const App = () => {
  const {state: {token}} = useAuthCtx()

  if(token) {
    return <LogIn />
  }

  return (
    <Router>
      <StoreProviders>
        <Switch>
          <Route path="/" components={Home} />
        </Switch>
      </StoreProviders>
    </Router>
  );
};
