import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';

// Обработка редиректа с 404.html
const savedPath = sessionStorage.getItem('redirect-path');
if (savedPath) {
  sessionStorage.removeItem('redirect-path');
  const path = savedPath.replace('/todo', '');
  if (path && path !== '/') {
    window.history.replaceState({}, '', path);
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);