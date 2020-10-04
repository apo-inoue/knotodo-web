import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CustomAuthProvider } from './store/CustomAuthProvider';
import { CustomThemeProvider } from './theme/provider';

ReactDOM.render(
  <React.StrictMode>
    <CustomAuthProvider>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </CustomAuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
