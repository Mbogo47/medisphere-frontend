import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from '../src/context/Context.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
