import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CustomAuthProvider } from './store/CustomAuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <CustomAuthProvider>
      <App />
    </CustomAuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
