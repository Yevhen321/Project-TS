import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback='Loading....'>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
