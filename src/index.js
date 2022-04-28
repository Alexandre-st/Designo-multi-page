import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);