import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { GlobalStyles } from 'components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/application-cars">
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
