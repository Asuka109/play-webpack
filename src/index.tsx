import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { invariant } from './utils';

const el = document.getElementById('root');

invariant(el, 'Root element not found');

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
