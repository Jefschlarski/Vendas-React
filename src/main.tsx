import App from './App.tsx';
import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App/>
    </GlobalProvider>
  </React.StrictMode>,
);
