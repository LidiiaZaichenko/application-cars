import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/application-cars">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);