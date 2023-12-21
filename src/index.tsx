// Update the import statement for createRoot
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

// Create a root using createRoot
const root = createRoot(document.getElementById('root')!);

// Render your app within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
