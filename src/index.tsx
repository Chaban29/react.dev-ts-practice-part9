import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

const rootElement = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
